import { Router } from "express";
import { avaliacaoController } from "../../controllers/avaliacaoController";
import { AuthMidle } from "../../middlewares/authMidle";

const cadastrarAvaliacao = Router()

cadastrarAvaliacao.post('/cadastrarAvaliacao', new AuthMidle().checkToken ,new avaliacaoController().create)

export default cadastrarAvaliacao