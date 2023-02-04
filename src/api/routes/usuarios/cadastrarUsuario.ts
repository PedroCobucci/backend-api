
import Router from "express";
import { UsuariosController } from "../../controllers/usuarioController";
import { AuthMidle } from "../../middlewares/authMidle";
import { cadastrarMidle } from "../../middlewares/cadastrarMidle";

const cadastrarUsuario = Router()

cadastrarUsuario.post('/cadastrarUsuario', new cadastrarMidle().checkToken ,new UsuariosController().create)

export default cadastrarUsuario