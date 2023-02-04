import { Router } from "express";
import { UsuariosController } from "../../controllers/usuarioController";
import { AuthMidle } from "../../middlewares/authMidle";

const deletarUsuarios = Router()

deletarUsuarios.delete('/deletarUsuario', new AuthMidle().checkToken ,new UsuariosController().Delete)

export default deletarUsuarios