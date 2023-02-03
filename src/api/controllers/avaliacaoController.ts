import { Request, Response } from "express";
import { animalRepository } from "../repositories/animalRepository";
import { avaliacaoRepository } from "../repositories/avaliacaoRepository";
import { consultaRespository } from "../repositories/consultaRepository";
import { medicoRepository } from "../repositories/medicoRepository";
import { usuarioRepository } from "../repositories/usuarioRespository";

export class avaliacaoController{

    async create(req:Request, res:Response){

        const { nota, id_consulta } = req.body

        
        

        

        try{
            const consultaRealizada = await consultaRespository.findOne({
                where: {
                    ID_CONSULTA: id_consulta
                },
                relations:{
                    ID_ANIMAL_CONSULTADO: true,
                    ID_MEDICO_RESPONSAVEL: true
                }
            })
            if(!consultaRealizada){
                return res.status(404).json({message: 'Não foi possível encontrar a consulta.'})
            }
            
            const medicoResponsavel = await medicoRepository.findOneBy({CRMV: consultaRealizada.ID_MEDICO_RESPONSAVEL.CRMV})
            const animalConsultado =  await animalRepository.findOneBy({ID_ANIMAL: consultaRealizada.ID_ANIMAL_CONSULTADO.ID_ANIMAL})
            if(medicoResponsavel && animalConsultado && consultaRealizada){

                const novaAvaliacao = await avaliacaoRepository.create({
                    ID_ANIMAL_ATENDIDO: animalConsultado,
                    ID_CONSULTA_REALIZADA: consultaRealizada,
                    ID_MEDICO_RESPONSAVEL: medicoResponsavel,
                    NOTA: nota

                })

                consultaRealizada.FEEDBACK_ATENDIMENTO = nota != '' ? novaAvaliacao.NOTA : consultaRealizada.FEEDBACK_ATENDIMENTO

                await avaliacaoRepository.save(novaAvaliacao)
                await consultaRespository.save(consultaRealizada)

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



            const usuario = await usuarioRepository.findOne({
                where: {
                    CPF: cpf
                },
                relations: {
                    USUARIO_MEDICO: true
                }
            })

            if(!usuario){
                return res.status(404).json({message: 'Usuário não encontrado. Verifique o CPF'})
            }

            const medicoResponsavel = await medicoRepository.find({
                where:{
                    CRMV: usuario.USUARIO_MEDICO.CRMV
                },
                relations: {
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