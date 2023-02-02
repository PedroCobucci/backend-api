import { Router } from "express";
import { AuthController } from "./api/controllers/authController";
import { avaliacaoController } from "./api/controllers/avaliacaoController";
import { consultaController } from "./api/controllers/consultaController";
import { tipoUsuarioController } from "./api/controllers/tipoUsuarioController";
import { UsuariosController } from "./api/controllers/usuarioController";

const routes = Router()

routes.post('/auth', new AuthController().checkAuth)

routes.post('/usuarios', new UsuariosController().create)
routes.post('/usuarioUpdate', new UsuariosController().update)
routes.post('/tipo', new tipoUsuarioController().create)
routes.get('/usuarios',  new UsuariosController().listAllUsers)
routes.get('/getUser',  new UsuariosController().getUser)
routes.delete('/usuario',  new UsuariosController().Delete)

routes.post('/cadastrarConsulta', new consultaController().create)
routes.post('/atualizarConsulta',  new consultaController().update)
routes.delete('/deletarConsulta',  new consultaController().delete)
routes.get('/listarConsultas',  new consultaController().listAll)
routes.get('/buscaConsulta',  new consultaController().getConsulta)


routes.post('/cadastrarAvaliacao', new avaliacaoController().create)
routes.get('/avaliacoesDeMedico', new avaliacaoController().getAllFeedbackFromMedico)





export default routes