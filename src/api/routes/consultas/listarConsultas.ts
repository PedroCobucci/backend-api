import Router from "express";
import { consultaController } from "../../controllers/consultaController";
import { AuthMidle } from "../../middlewares/authMidle";

const listarConsultas = Router()

listarConsultas.get('/listarConsultas', new AuthMidle().checkToken ,new consultaController().listAll)

export default listarConsultas