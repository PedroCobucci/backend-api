import { Request, Response } from "express";
import { animalRepository } from "../repositories/animalRepository";
import { usuarioRepository } from "../repositories/usuarioRespository";

export class AnimalController{
    async create (req: Request, res: Response){
        const { especie, nome, cpf_tutor } = req.body

        try{

            const tutorDoAnimal = await usuarioRepository.findOneBy({CPF: cpf_tutor})

            if(tutorDoAnimal){

                const novoAnimal = await  animalRepository.create({
                    ESPECIE: especie,
                    NOME: nome,
                    ID_TUTOR: tutorDoAnimal,
                    ATIVO: true
                })
                
                await animalRepository.save(novoAnimal)

                return res.status(200).json(novoAnimal)

            }else{
                return res.status(404).json({message: 'Tutor não encontrado. Verifique o CPF'})
            }


        }catch (error){
             console.log(error)
             res.status(500).json({message: 'Internal Server Error'})
         }
    }

    async update(req: Request, res: Response){

        const { especie, nome, id_animal } = req.body

        try{

            const atualizarAnimal = await animalRepository.findOneBy({ID_ANIMAL: id_animal})

            if(atualizarAnimal){

                atualizarAnimal.ESPECIE = especie,
                atualizarAnimal.NOME = nome
                
                await animalRepository.save(atualizarAnimal)

                return res.status(200).json(atualizarAnimal)

            }else{
                return res.status(404).json({message: 'Animal não encontrado. Verifique o ID'})
            }


        }catch (error){
             console.log(error)
             res.status(500).json({message: 'Internal Server Error'})
         }

    }

    async delete(req: Request, res: Response){
        const { id_animal } = req.body

        try{

            const atualizarAnimal = await animalRepository.findOneBy({ID_ANIMAL: id_animal})

            if(atualizarAnimal){

                atualizarAnimal.ATIVO = false
                
                await animalRepository.save(atualizarAnimal)

                return res.status(200).json(atualizarAnimal)

            }else{
                return res.status(404).json({message: 'Animal não encontrado. Verifique o ID'})
            }


        }catch (error){
             console.log(error)
             res.status(500).json({message: 'Internal Server Error'})
         }

    }

    async getAnimal(req: Request, res: Response){
        const { id_animal } = req.body

        try{

            const buscaAnimal = await animalRepository.findOneBy({ID_ANIMAL: id_animal})

            return buscaAnimal ? res.status(200).json(buscaAnimal) : res.status(404).json({message: 'Animal não encontrado. Verifique o ID'})

        }catch (error){
             console.log(error)
             res.status(500).json({message: 'Internal Server Error'})
         }
    }

    async getAllAnimalsFromUser(req: Request, res: Response){
        
        const { cpf_tutor } = req.body
        try{

            const getUsuario = await usuarioRepository.findOne({
                where:{
                    CPF: cpf_tutor
                },
                relations:{
                    ANIMAL_DE_ESTIMACAO: true
                }
            })

            return getUsuario ? res.status(200).json(getUsuario) : res.status(404).json({message: 'Usuário não encontrado, verifique o CPF'})


        }catch (error){
            console.log(error)
            res.status(500).json({message: 'Internal Server Error'})
        }
        
    }

}