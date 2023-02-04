import { Router } from "express";
import { consultaController } from "../../controllers/consultaController";
import { AuthMidle } from "../../middlewares/authMidle";

const buscaConsulta = Router()

buscaConsulta.post('/buscaConsulta',  new AuthMidle().checkToken ,new consultaController().getConsulta)

export default buscaConsulta