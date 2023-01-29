import { AppDataSource } from "../../config/data-source";
import { USUARIO } from "../entities/usuarios";

export const usuarioRepository = AppDataSource.getRepository(USUARIO)