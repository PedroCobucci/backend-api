import { AppDataSource } from "../../config/data-source";
import { TIPO_USUARIO } from "../entities/tipoUsuario";

export const tipoUsuarioRepository = AppDataSource.getRepository(TIPO_USUARIO)