import { Router } from "express";
import { AuthController } from "./api/controllers/authController";
import { tipoUsuarioController } from "./api/controllers/tipoUsuarioController";
import { UsuariosController } from "./api/controllers/usuarioController";

const routes = Router()

routes.post('/usuarios', new UsuariosController().create)
routes.post('/usuarioUpdate', new UsuariosController().update)
routes.post('/tipo', new tipoUsuarioController().create)
routes.get('/usuarios',  new UsuariosController().listAllUsers)
routes.get('/getUser',  new UsuariosController().getUser)
routes.delete('/usuario',  new UsuariosController().Delete)


routes.post('/auth', new AuthController().checkAuth)



export default routes