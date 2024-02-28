import { body } from "express-validator";
import Album from "../Models/Album.js";
import { checkValidate } from "../Functions/check.js";
import Foto from "../Models/Foto.js";

export default class AlbumController {

    static validate = [
        body("nama").notEmpty().withMessage("Nama kosong"),
        body("deskripsi").notEmpty().withMessage("Deskripsi kosong"),
        checkValidate,
    ];

    static async index (req,res) {
        try{   
            const data = await Album.findAll({where:{user_id:req.user.id}});
            return res.json({msg:"success",data});
        }catch(e){
            return res.json(e);
        }
    }

    static async show (req,res){
        try{
            const id = req.params.id;
            const data = await Album.findOne({
                where:{id},
                include:Foto
            });
            return res.json({msg:"success",data})
        }catch(e){
            return res.json(e);
        }
    }

    static async store (req,res) {
        try{
            const body = req.body;
            body.user_id = req.user.id;
            await Album.create(body);
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

    static async update (req,res){
        try{
            const body = req.body;
            const id = req.params.id;
            await Album.update(body,{where:{id}});
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

    static async destroy (req,res){
        try{
            const id = req.params.id;
            await Album.destroy({where:{id}});
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

}