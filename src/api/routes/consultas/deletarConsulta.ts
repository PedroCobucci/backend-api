import { Router } from "express";
import { consultaController } from "../../controllers/consultaController";
import { AuthMidle } from "../../middlewares/authMidle";

const deletarConsulta = Router()

deletarConsulta.delete('/deletarConsulta', new AuthMidle().checkToken ,new consultaController().delete)

export default deletarConsulta