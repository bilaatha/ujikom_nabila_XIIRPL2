import { DataTypes } from "sequelize";
import db from "../Database/config.js";
import Foto from "./Foto.js";
import User from "./User.js";

const Like = db.define("like",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    }
},{freezeTableName:true});

Like.belongsTo(Foto,{foreignKey:"foto_id",onDelete:"CASCADE"});
Like.belongsTo(User,{foreignKey:"user_id",onDelete:"CASCADE"});

User.hasMany(Like,{foreignKey:"user_id"});
Foto.hasMany(Like,{foreignKey:"foto_id"});

await Like.sync();

export default Like;