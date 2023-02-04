import { Router } from "express";
import { consultaController } from "../../controllers/consultaController";
import { AuthMidle } from "../../middlewares/authMidle";

const atualizarConsulta = Router()

atualizarConsulta.post('/atualizarConsulta', new AuthMidle().checkToken ,new consultaController().update)

export default atualizarConsulta