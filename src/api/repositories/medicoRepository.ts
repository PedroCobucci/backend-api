import { AppDataSource } from "../../config/data-source";
import { MEDICO } from "../entities/medicos";

export const medicoRepository = AppDataSource.getRepository(MEDICO)