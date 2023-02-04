import { Router } from "express";
import { avaliacaoController } from "../../controllers/avaliacaoController";
import { AuthMidle } from "../../middlewares/authMidle";

const avaliacoesDeMedico = Router()


avaliacoesDeMedico.post('/avaliacoesDeMedico', new AuthMidle().checkToken ,new avaliacaoController().getAllFeedbackFromMedico)

export default avaliacoesDeMedico