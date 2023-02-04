import { Router } from "express";
import { AnimalController } from "../../controllers/animalController";
import { AuthMidle } from "../../middlewares/authMidle";

const deletarAnimal = Router()


deletarAnimal.delete('/deletarAnimal', new AuthMidle().checkToken ,new AnimalController().delete)


export default deletarAnimal