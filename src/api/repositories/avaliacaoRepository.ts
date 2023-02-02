import { AppDataSource } from "../../config/data-source";
import { AVALIACAO } from "../entities/avaliacoes";


export const avaliacaoRepository = AppDataSource.getRepository(AVALIACAO)