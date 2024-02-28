import { DataTypes } from "sequelize";
import db from "../Database/config.js";
import User from "./User.js";
import Album from "./Album.js";

const Foto = db.define("foto",{  
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    nama:DataTypes.STRING,
    deskripsi:DataTypes.TEXT,
    url:DataTypes.STRING,
},{freezeTableName:true});
    
Foto.belongsTo(User,{foreignKey:"user_id"});
Foto.belongsTo(Album,{foreignKey:"album_id"});

User.hasMany(Foto,{foreignKey:"user_id"});
Album.hasMany(Foto,{foreignKey:"album_id"});

await Foto.sync();

export default Foto;