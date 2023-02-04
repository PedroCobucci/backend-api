import { Router } from "express";
import { AnimalController } from "../../controllers/animalController";
import { AuthMidle } from "../../middlewares/authMidle";

const atualizarAnimal = Router()



atualizarAnimal.post('/atualizarAnimal', new AuthMidle().checkToken, new AnimalController().update)

export default atualizarAnimal