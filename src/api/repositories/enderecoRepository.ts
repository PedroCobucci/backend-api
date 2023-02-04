import { AppDataSource } from "../../config/data-source";
import { ENDERECO } from "../models/enderecos";

export const enderecoRepository = AppDataSource.getRepository(ENDERECO)