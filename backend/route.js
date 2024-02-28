import express from "express";
import LoginController from "./Controllers/LoginController.js";
import { checkLogin } from "./Functions/check.js";
import UserController from "./Controllers/UserController.js";
import FotoController from "./Controllers/FotoController.js";
import AlbumController from "./Controllers/AlbumController.js";
import LikeController from "./Controllers/LikeController.js";
import KomentarController from "./Controllers/KomentarController.js";


const Route = express.Router();

Route.post("/api/login", LoginController.validate, LoginController.login);
Route.get("/api/logout", checkLogin, LoginController.logout);

Route.get("/api/user", checkLogin, UserController.index);
Route.post("/api/user", UserController.validate, UserController.store);

Route.get("/fotos",checkLogin,FotoController.index);
Route.get("/foto",checkLogin,FotoController.indexByUser);
Route.post("/foto",checkLogin,FotoController.validate,FotoController.store);
Route.get("/foto/:id",checkLogin,FotoController.show);
Route.put("/foto/:id",checkLogin,FotoController.validate,FotoController.update);
Route.delete("/foto/:id",checkLogin,FotoController.destroy);

Route.get("/album",checkLogin,AlbumController.index);
Route.post("/album",checkLogin,AlbumController.validate,AlbumController.store);
Route.get("/album/:id",checkLogin,AlbumController.show);
Route.put("/album/:id",checkLogin,AlbumController.validate,AlbumController.update);
Route.delete("/album/:id",checkLogin,AlbumController.destroy);

Route.post("/like",checkLogin,LikeController.validate,LikeController.store);
Route.delete("/like/:id",checkLogin,LikeController.destroy);

Route.post("/komentar",checkLogin,KomentarController.validate,KomentarController.store);
Route.get("/komentar/:id",checkLogin,KomentarController.show);
Route.put("/komentar/:id",checkLogin,KomentarController.validateUpdate,KomentarController.update);
Route.delete("/komentar/:id",checkLogin,KomentarController.destroy);

export default Route;