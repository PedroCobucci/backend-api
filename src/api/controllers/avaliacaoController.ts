import { Request, Response } from "express";
import { animalRepository } from "../repositories/animalRepository";
import { avaliacaoRepository } from "../repositories/avaliacaoRepository";
import { consultaRespository } from "../repositories/consultaRepository";
import { medicoRepository } from "../repositories/medicoRepository";

export class avaliacaoController{

    async create(req:Request, res:Response){

        const { nota, id_medico, id_animal, id_consulta } = req.body

        const medicoResponsavel = await medicoRepository.findOneBy({ID_MEDICO: id_medico})
        const animalConsultado =  await animalRepository.findOneBy({ID_ANIMAL: id_animal})
        const consultaRealizada = await consultaRespository.findOneBy({ID_CONSULTA: id_consulta})

        try{
            if(medicoResponsavel && animalConsultado && consultaRealizada){

                const novaAvaliacao = await avaliacaoRepository.create({
                    ID_ANIMAL_ATENDIDO: animalConsultado,
                    ID_CONSULTA_REALIZADA: consultaRealizada,
                    ID_MEDICO_RESPONSAVEL: medicoResponsavel,
                    NOTA: nota

                })

                return res.status(200).json(novaAvaliacao)
            }else{
                return res.status(404).json({message: 'Não foi possível encontrar as informações necessárias para o cadastro de uma avaliação.'})
            }
        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async getAllFeedbackFromMedico(req:Request, res:Response){

        const { nota, id_medico, id_animal, id_consulta, cpf } = req.body

        try{

            const medicoResponsavel = await medicoRepository.find({
                where:{
                    ID_USUARIO: {CPF: cpf}
                },
                relations:{
                    ID_AVALIACAO: true
                }
            })
    
            return medicoResponsavel? res.status(200).json(medicoResponsavel) : res.status(404).json({message: 'Medico não encontrado. Verifique o CPF'})

        }catch (error){
             console.log(error)
             res.status(500).json({message: 'Internal Server Error'})
         }
    }
}