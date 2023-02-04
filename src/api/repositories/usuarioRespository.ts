import { AppDataSource } from "../../config/data-source";
import { USUARIO } from "../models/usuarios";

export const usuarioRepository = AppDataSource.getRepository(USUARIO)