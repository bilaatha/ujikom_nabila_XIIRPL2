import { body } from "express-validator";
import { checkImage, checkValidate } from "../Functions/check.js";
import Foto from "../Models/Foto.js";
import fs from "fs";
import Like from "../Models/Like.js";
import Komentar from "../Models/Komentar.js";
import User from "../Models/User.js";
import { Op } from "sequelize";

export default class FotoController {

    static validate = [
        body("nama").notEmpty().withMessage("Nama kosong"),
        body("deskripsi").notEmpty().withMessage("Deskripsi kosong"),
        checkValidate,
    ]

    static async index(req, res) {
        try {
            const data = await Foto.findAll({
                where: { nama: { [Op.like]: `%${req.query.cari || ""}%` } },
            });
            return res.json({ msg: "success", data });
        } catch (e) {
            return res.json(e);
        }
    }

    static async indexByUser(req, res) {
        try {
            const data = await Foto.findAll({
                where: {
                    user_id: req.user.id,
                    nama: { [Op.like]: `%${req.query.cari || ""}%` },
                }
            });
            return res.json({ msg: "success", data });
        } catch (e) {
            return res.json(e);
        }
    }

    static async show(req, res) {
        try {
            const id = req.params.id;
            const foto = await Foto.findOne({
                where: { id },
                include: [Like, {
                    model: Komentar,
                    include: User
                }, {
                        model: User,
                        attributes: ["nama"]
                    }],
            });
            const like = await Like.findOne({
                where: {
                    foto_id: foto.id,
                    user_id: req.user.id,
                }
            }) || false;
            const data = { foto, like }
            return res.json({ msg: "success", data })
        } catch (e) {
            return res.json(e);
        }
    }

    static async store(req, res) {
        try {
            const body = req.body;
            const check = checkImage(req, "foto");
            if (check.msg != "success") return res.json({ msg: check.msg })
            if (body.album_id === "0") delete body.album_id
            body.url = check.data;
            body.user_id = req.user.id;
            await Foto.create(body);
            return res.json({ msg: "success" });
        } catch (e) {
            return res.json(e);
        }
    }

    static async update(req, res) {
        try {
            const body = req.body;
            const id = req.params.id;
            const checkFoto = await Foto.findOne({ where: { id } });
            if (body.album_id === "0") body.album_id = null;
            if (!checkFoto) return res.json({ msg: "Foto tidak ada" });
            if (req.files && req.files.foto) {
                const checkImg = checkImage(req, "foto");
                if (checkImg.msg != "success") return res.json({ msg: checkImg.msg });
                body.url = checkImg.data;
                HapusFoto(checkFoto.url);
            }
            await Foto.update(body, { where: { id } });
            return res.json({ msg: "success" });
        } catch (e) {
            return res.json(e);
        }
    }

    static async destroy(req, res) {
        try {
            const id = req.params.id;
            const checkFoto = await Foto.findOne({ where: { id } });
            if (!checkFoto) return res.json({ msg: "Foto tidak ada" });
            await Foto.destroy({ where: { id } });
            HapusFoto(checkFoto.url)
            return res.json({ msg: "success" });
        } catch (e) {
            return res.json(e);
        }
    }

}

function HapusFoto(url) {
    fs.unlinkSync(`./Public/img/${(url.split("/"))[url.split("/").length - 1]}`)
}