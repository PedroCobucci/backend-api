import { Router } from "express";
import { consultaController } from "../../controllers/consultaController";
import { AuthMidle } from "../../middlewares/authMidle";

const cadastrarConsulta = Router()

cadastrarConsulta.post('/cadastrarConsulta', new AuthMidle().checkToken ,new consultaController().create)

export default cadastrarConsulta