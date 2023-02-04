
import Router from "express";
import { UsuariosController } from "../../controllers/usuarioController";
import { AuthMidle } from "../../middlewares/authMidle";

const atualizarUsuario = Router()

atualizarUsuario.post('/atualizarUsuario', new AuthMidle().checkToken ,new UsuariosController().update)

export default atualizarUsuario