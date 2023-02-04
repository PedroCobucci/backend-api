import { Router } from "express";
import { AnimalController } from "../../controllers/animalController";
import { AuthMidle } from "../../middlewares/authMidle";

const buscaAnimal = Router()


buscaAnimal.post('/buscaAnimal', new AuthMidle().checkToken ,new AnimalController().getAnimal)

export default buscaAnimal