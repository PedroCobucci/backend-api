import { Request, Response } from "express";
import { enderecoRepository } from "../repositories/enderecoRepository";
import { medicoRepository } from "../repositories/medicoRepository";
import { tipoUsuarioRepository } from "../repositories/tipoUsuarioRepository";
import { usuarioRepository } from "../repositories/usuarioRespository";
import { USUARIO } from "../entities/usuarios"
import {UserDTOs } from "../models/usuarioDto";
import { TIPO_USUARIO } from "../entities/tipoUsuario";
import { EqualOperator, FindOperator } from "typeorm";

export class UsuariosController {
    async create(req: Request, res: Response){

        const { cpf,nome,data_nascimento,telefone,email,tipo,rua,bairro,cidade,complemento,cep,numero,crmv,cpf_supervisor,senha,username } = req.body

        try{

            const tipoUsuarioQuery = await tipoUsuarioRepository.findOneBy({TIPO: tipo})
            const cpfSupervisorQuery = await usuarioRepository.findOneBy({CPF: cpf_supervisor})
            const queryUser = await usuarioRepository.findOne({
                where:{
                    ATIVO: true,
                    CPF: cpf
                }
            })

            if(tipoUsuarioQuery && !queryUser)
            {

                const newUsuario = usuarioRepository.create({
                    CPF: cpf, 
                    NOME: nome,
                    DATA_NASCIMENTO: data_nascimento,
                    TELEFONE: telefone,
                    EMAIL: email,
                    SENHA: senha,
                    USERNAME: username,
                    ATIVO: true
                })
                newUsuario.ID_TIPO_USUARIO = tipoUsuarioQuery
    
                await usuarioRepository.save(newUsuario)
    
                const newEndereco = enderecoRepository.create({
                    RUA: rua,
                    BAIRRO: bairro,
                    CIDADE: cidade,
                    COMPLEMENTO: complemento,
                    CEP: cep,
                    NUMERO: numero
                })
                newEndereco.ID_USUARIO = newUsuario
    
                await enderecoRepository.save(newEndereco)

                if(tipoUsuarioQuery.TIPO == "veterinario" && cpfSupervisorQuery)
                { 
                    const newMedico = medicoRepository.create({
                        CRMV: crmv,
                        CPF_SUPERVISOR: cpf_supervisor
                    })
                    newMedico.ID_USUARIO = newUsuario

                    await medicoRepository.save(newMedico)
                }
    
                return res.status(201).json(newUsuario)
            }else{
                return !queryUser? res.status(404).json({message: "Tipo de usuário não encontrado"}) : res.status(500).json({message: "CPF já cadastrado"})
            }

           




        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }

    }

    async update(req: Request, res: Response){

        const { cpf,nome,data_nascimento,telefone,email,tipo,rua,bairro,cidade,complemento,cep,numero,crmv,cpf_supervisor,id_usuario, senha } = req.body

        try{
            
            const tipoUsuarioUpdate = await tipoUsuarioRepository.findOneBy({TIPO: tipo })

            const usuarioUpdate = await usuarioRepository.findOne({
                where:{
                    CPF: cpf
                },
                relations:{
                    ID_TIPO_USUARIO: true,
                    USUARIO_MEDICO: true,
                    ENDERECO: true
                }
            })
            
            if(usuarioUpdate){

                const enderecoUpdate = await enderecoRepository.findOneBy({ID_ENDERECO: usuarioUpdate.ENDERECO.ID_ENDERECO})

                if(usuarioUpdate.USUARIO_MEDICO){
                    const medicoUpdate = await medicoRepository.findOneBy({CRMV: usuarioUpdate.USUARIO_MEDICO.CRMV})
                    
                    if(medicoUpdate){
                        medicoUpdate.CPF_SUPERVISOR = cpf_supervisor != '' ? cpf_supervisor : medicoUpdate.CPF_SUPERVISOR
                        medicoUpdate.CRMV = crmv != '' ? crmv : medicoUpdate.CRMV

                        await medicoRepository.save(medicoUpdate)
                    }
                }
               

                usuarioUpdate.DATA_NASCIMENTO = data_nascimento != '' ? data_nascimento : usuarioUpdate.DATA_NASCIMENTO
                usuarioUpdate.EMAIL = email != '' ? email : usuarioUpdate.EMAIL
                usuarioUpdate.ID_TIPO_USUARIO = tipoUsuarioUpdate ? tipoUsuarioUpdate : usuarioUpdate.ID_TIPO_USUARIO
                usuarioUpdate.NOME = nome != '' ? nome : usuarioUpdate.NOME
                usuarioUpdate.TELEFONE =  telefone != '' ? telefone : usuarioUpdate.TELEFONE
                //usuarioUpdate.USUARIO_MEDICO = medicoUpdate ? medicoUpdate : usuarioUpdate.USUARIO_MEDICO

                if (enderecoUpdate){
                    enderecoUpdate.BAIRRO = bairro != '' ? bairro :  enderecoUpdate?.BAIRRO
                    enderecoUpdate.CEP = cep != '' ? cep : enderecoUpdate.CEP
                    enderecoUpdate.CIDADE = cidade != '' ? cidade : enderecoUpdate.CIDADE
                    enderecoUpdate.COMPLEMENTO = complemento != '' ? complemento : enderecoUpdate.COMPLEMENTO
                    enderecoUpdate.NUMERO = numero != '' ? numero : enderecoUpdate.NUMERO
                    enderecoUpdate.RUA = rua != '' ? rua : enderecoUpdate.RUA

                    await enderecoRepository.save(enderecoUpdate)
                }
            
                await usuarioRepository.save(usuarioUpdate)
                
                return res.status(201).json(usuarioUpdate)

            }

            return res.status(404).json({message: 'Usuário não encontrado, verifique o CPF'})
        
        } catch (error){
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }


    }

    async listAllUsers(req: Request, res: Response){
        try{

           const usuarios = await usuarioRepository.find({
                relations: {
                    ID_TIPO_USUARIO: true,
                    ANIMAL_DE_ESTIMACAO: true,
                    ENDERECO: true,
                    USUARIO_MEDICO: true
                }
            })

            return res.json(usuarios)

        }catch (error){
            console.log(error)
            res.status(500).json({message: 'Internal Server Error'})
        }
    }

    async getUser(req: Request, res: Response){

        const { cpf,nome,data_nascimento,telefone,email,tipo,rua,bairro,cidade,complemento,cep,numero,crmv,cpf_supervisor,id_usuario, senha } = req.body
        try{

            const getUsuario = await usuarioRepository.findOne({
                where:{
                    CPF: cpf
                },
                relations:{
                    ID_TIPO_USUARIO: true,
                    USUARIO_MEDICO: true,
                    ANIMAL_DE_ESTIMACAO: true,
                    ENDERECO: true
                }
            })

            return getUsuario ? res.status(200).json(getUsuario) : res.status(404).json({message: 'Usuário não encontrado, verifique o CPF'})


        }catch (error){
            console.log(error)
            res.status(500).json({message: 'Internal Server Error'})
        }
        

    }

    async Delete(req: Request, res: Response){
        const { cpf,nome,data_nascimento,telefone,email,tipo,rua,bairro,cidade,complemento,cep,numero,crmv,cpf_supervisor,id_usuario, senha } = req.body

        try{

            const usuarioUpdate = await usuarioRepository.findOne({
                where:{
                    CPF: cpf
                }
            })

            if(usuarioUpdate){
                usuarioUpdate.ATIVO = false
                usuarioRepository.save(usuarioUpdate)
                return res.status(201).json(usuarioUpdate)
            }else{
                return res.status(404).json({message: 'Usuário não encontrado, verifique o CPF'})
            }
        }catch (error){
            console.log(error)
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}