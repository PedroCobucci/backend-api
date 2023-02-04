import { Router } from "express";
import { AuthController } from "../../controllers/authController";

const auth = Router()


auth.post('/auth', new AuthController().checkAuth)

export default auth