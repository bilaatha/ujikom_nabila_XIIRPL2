import { body } from "express-validator";
import { checkValidate } from "../Functions/check.js";
import Komentar from "../Models/Komentar.js";

export default class KomentarController {

    static validate = [
        body("isi").notEmpty().withMessage("Komentar kosong"),
        body("foto_id").notEmpty().withMessage("Foto kosong"),
        checkValidate,
    ]

    static validateUpdate = [
        body("isi").notEmpty().withMessage("Komentar kosong"),
        checkValidate,
    ]

    static async show (req,res) {
        try{
            const id = req.params.id;
            const data = await Komentar.findOne({where:{id}});
            return res.json({msg:"success",data});
        }catch(e){
            return res.json(e);
        }
    }

    static async store (req,res){
        try{
            const body = req.body;
            body.user_id = req.user.id;
            await Komentar.create(body);
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

    static async update (req,res){
        try{
            const body = req.body;
            const id = req.params.id;
            await Komentar.update(body,{where:{id}});
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

    static async destroy(req,res) {
        try{
            const id = req.params.id;
            await Komentar.destroy({where:{id}});
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

}