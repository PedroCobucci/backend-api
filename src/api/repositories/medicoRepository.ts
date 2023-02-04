import { AppDataSource } from "../../config/data-source";
import { MEDICO } from "../models/medicos";

export const medicoRepository = AppDataSource.getRepository(MEDICO)