import { Router } from "express";
import { AnimalController } from "../../controllers/animalController";
import { AuthMidle } from "../../middlewares/authMidle";

const listarAnimaisDeTutor = Router()


listarAnimaisDeTutor.post('/listarAnimaisDeTutor', new AuthMidle().checkToken ,new AnimalController().getAllAnimalsFromUser)


export default listarAnimaisDeTutor