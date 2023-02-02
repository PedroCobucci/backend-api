import { AppDataSource } from "../../config/data-source";
import { ANIMAL } from "../entities/animais";

export const animalRepository = AppDataSource.getRepository(ANIMAL)