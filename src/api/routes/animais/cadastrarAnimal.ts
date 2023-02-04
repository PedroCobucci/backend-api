import { Router } from "express";
import { AnimalController } from "../../controllers/animalController";
import { AuthMidle } from "../../middlewares/authMidle";

const cadastrarAnimal = Router()


cadastrarAnimal.post('/cadastrarAnimal', new AuthMidle().checkToken ,new AnimalController().create)


export default cadastrarAnimal