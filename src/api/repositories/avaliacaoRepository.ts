import { AppDataSource } from "../../config/data-source";
import { AVALIACAO } from "../models/avaliacoes";


export const avaliacaoRepository = AppDataSource.getRepository(AVALIACAO)