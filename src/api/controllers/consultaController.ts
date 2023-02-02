import { Request, Response } from "express";
import { animalRepository } from "../repositories/animalRepository";
import { avaliacaoRepository } from "../repositories/avaliacaoRepository";
import { consultaRespository } from "../repositories/consultaRepository";
import { medicoRepository } from "../repositories/medicoRepository";

export class consultaController{
    async create(req: Request, res: Response){

        const { id_medico, id_animal, data, status} = req.body

        const medicoResponsavel = await medicoRepository.findOneBy({ID_MEDICO: id_medico})
        const animalPaciente = await animalRepository.findOneBy({ID_ANIMAL: id_animal})
        
        try{
            if(medicoResponsavel && animalPaciente){
                const novaConsulta = await consultaRespository.create({
                    ID_MEDICO_RESPONSAVEL: medicoResponsavel,
                    ID_ANIMAL_CONSULTADO: animalPaciente,
                    DATA_ATENDIMENTO: data,
                    STATUS: status,
                    ATIVO: true
                })
                await consultaRespository.save(novaConsulta)

                return res.status(200).json(novaConsulta)
            }else{
                return res.status(404).json({message: 'Não foi possível encontrar Medico ou Animal.'})
            }
        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async update(req: Request, res: Response){
        const { id_medico, id_animal,documentos, data, status, id_consulta} = req.body


        const updateConsulta = await consultaRespository.findOneBy({ID_CONSULTA: id_consulta})
        const avaliacaoDaConsulta = await avaliacaoRepository.findOneBy({ID_CONSULTA_REALIZADA: id_consulta})
        
        try{
            if(updateConsulta){

                updateConsulta.DATA_ATENDIMENTO = data != '' ? data : updateConsulta.DATA_ATENDIMENTO
                updateConsulta.DOCUMENTOS = documentos != '' ? documentos : updateConsulta.DOCUMENTOS
                updateConsulta.FEEDBACK_ATENDIMENTO = avaliacaoDaConsulta ? avaliacaoDaConsulta.ID_AVALIACAO : updateConsulta.FEEDBACK_ATENDIMENTO
                updateConsulta.ID_ANIMAL_CONSULTADO = id_animal != '' ? id_animal : updateConsulta.ID_ANIMAL_CONSULTADO
                updateConsulta.ID_MEDICO_RESPONSAVEL = id_medico != '' ? id_medico : updateConsulta.ID_MEDICO_RESPONSAVEL
                updateConsulta.STATUS = data != '' ? status : updateConsulta.STATUS

                await consultaRespository.save(updateConsulta)

                return res.status(200).json(updateConsulta)
            }else{
                return res.status(404).json({message: 'Não foi possível encontrar consulta.'})
            }
        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async delete(req: Request, res: Response){
        const { id_consulta } = req.body


        const deleteConsulta = await consultaRespository.findOneBy({ID_CONSULTA: id_consulta})
        
        try{
            if(deleteConsulta){

                deleteConsulta.ATIVO = false
                await consultaRespository.save(deleteConsulta)

                return res.status(200).json(deleteConsulta)
            }else{
                return res.status(404).json({message: 'Não foi possível encontrar consulta.'})
            }
        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async listAll(req: Request, res: Response){

        try{

            const consultas = await consultaRespository.find({
                 relations: {
                    ID_ANIMAL_CONSULTADO: true,
                    ID_MEDICO_RESPONSAVEL: true,
                    ID_AVALIACAO_REALIZADA: true
                 }
             })
 
             return consultas? res.json(consultas) : res.status(404).json({message: 'Consultas não encontradas'})
 
         }catch (error){
             console.log(error)
             res.status(500).json({message: 'Internal Server Error'})
         }
    }

    async getConsulta(req: Request, res: Response){

        const { id_consulta } = req.body

        try{

            const getConsulta = await consultaRespository.findOne({
                where:{
                    ID_CONSULTA: id_consulta
                },
                relations:{
                    ID_ANIMAL_CONSULTADO: true,
                    ID_MEDICO_RESPONSAVEL: true,
                    ID_AVALIACAO_REALIZADA: true
                }
            })

            return getConsulta ? res.status(200).json(getConsulta) : res.status(404).json({message: 'Consulta não encontrada, verifique o ID da consulta'})


        }catch (error){
            console.log(error)
            res.status(500).json({message: 'Internal Server Error'})
        }
    }



}