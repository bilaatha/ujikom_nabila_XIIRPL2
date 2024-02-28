import { body } from "express-validator";
import { checkValidate } from "../Functions/check.js";
import Like from "../Models/Like.js";

export default class LikeController {

    static validate = [
        body("foto_id").notEmpty().withMessage("Foto kosong"),
        checkValidate,
    ]

    static async store (req,res) {
        try{
            const body = req.body;
            body.user_id = req.user.id;
            const like = await Like.create(body);
            return res.json({msg:"success",data:like})
        }catch(e){
            return res.json(e);
        }
    }

    static async destroy (req,res) {
        try{
            const id = req.params.id;
            await Like.destroy({where:{id}});
            return res.json({msg:"success"});
        }catch(e){
            return res.json(e);
        }
    }

}