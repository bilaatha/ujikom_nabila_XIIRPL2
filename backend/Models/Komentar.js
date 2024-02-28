import { DataTypes } from "sequelize";
import db from "../Database/config.js";
import Foto from "./Foto.js";
import User from "./User.js";

const Komentar = db.define("komentar",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    isi:DataTypes.TEXT,
},{freezeTableName:true});

Komentar.belongsTo(Foto,{foreignKey:"foto_id",onDelete:"CASCADE"});
Komentar.belongsTo(User,{foreignKey:"user_id",onDelete:"CASCADE"});

Foto.hasMany(Komentar,{foreignKey:"foto_id"});
User.hasMany(Komentar,{foreignKey:"user_id"});

await Komentar.sync();

export default Komentar;