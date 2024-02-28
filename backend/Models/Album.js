import { DataTypes } from "sequelize";
import db from "../Database/config.js";
import User from "./User.js";

const Album = db.define("album",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    nama:DataTypes.STRING,
    deskripsi:DataTypes.TEXT,
},{freezeTableName:true});

Album.belongsTo(User,{foreignKey:"user_id"});
User.hasMany(Album,{foreignKey:"user_id"});

await Album.sync();

export default Album;