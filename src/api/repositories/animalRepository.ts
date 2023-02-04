import { AppDataSource } from "../../config/data-source";
import { ANIMAL } from "../models/animais";

export const animalRepository = AppDataSource.getRepository(ANIMAL)