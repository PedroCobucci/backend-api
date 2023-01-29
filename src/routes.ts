import { Router } from "express";
import { tipoUsuarioController } from "./api/controllers/tipoUsuarioController";
import { UsuariosController } from "./api/controllers/usuarioController";

const routes = Router()

routes.post('/usuarios', new UsuariosController().create)
routes.post('/usuariosUpdate', new UsuariosController().update)
routes.post('/tipo', new tipoUsuarioController().create)
routes.get('/usuarios',  new UsuariosController().list)

export default routes