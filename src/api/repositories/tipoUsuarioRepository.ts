import { AppDataSource } from "../../config/data-source";
import { TIPO_USUARIO } from "../models/tipoUsuario";

export const tipoUsuarioRepository = AppDataSource.getRepository(TIPO_USUARIO)