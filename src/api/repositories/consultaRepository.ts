import { AppDataSource } from "../../config/data-source";
import { CONSULTA } from "../models/consultas";


export const consultaRespository = AppDataSource.getRepository(CONSULTA)