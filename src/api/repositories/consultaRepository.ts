import { AppDataSource } from "../../config/data-source";
import { CONSULTA } from "../entities/consultas";


export const consultaRespository = AppDataSource.getRepository(CONSULTA)