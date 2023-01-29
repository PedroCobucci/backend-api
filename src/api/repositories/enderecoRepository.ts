import { AppDataSource } from "../../config/data-source";
import { ENDERECO } from "../entities/enderecos";

export const enderecoRepository = AppDataSource.getRepository(ENDERECO)