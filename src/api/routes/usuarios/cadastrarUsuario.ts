
import Router from "express";
import { UsuariosController } from "../../controllers/usuarioController";
import { AuthMidle } from "../../middlewares/authMidle";

const cadastrarUsuario = Router()

cadastrarUsuario.post('/cadastrarUsuario', new AuthMidle().checkToken ,new UsuariosController().create)

export default cadastrarUsuario