
import Router from "express";
import { UsuariosController } from "../../controllers/usuarioController";
import { AuthMidle } from "../../middlewares/authMidle";

const listaUsuarios = Router()

listaUsuarios.get('/listaUsuarios', new AuthMidle().checkToken ,new UsuariosController().listAllUsers)

export default listaUsuarios