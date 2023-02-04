import { Router } from "express";
import { UsuariosController } from "../../controllers/usuarioController";
import { AuthMidle } from "../../middlewares/authMidle";

const buscaUsuarios = Router()

buscaUsuarios.post('/buscaUsuario', new AuthMidle().checkToken ,new UsuariosController().getUser)

export default buscaUsuarios