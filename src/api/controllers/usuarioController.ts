import { Request, Response } from "express";
import { enderecoRepository } from "../repositories/enderecoRepository";
import { medicoRepository } from "../repositories/medicoRepository";
import { tipoUsuarioRepository } from "../repositories/tipoUsuarioRepository";
import { usuarioRepository } from "../repositories/usuarioRespository";
import { USUARIO } from "../entities/usuarios"
import {UserDTOs } from "../models/usuarioDto";
import { TIPO_USUARIO } from "../entities/tipoUsuario";

export class UsuariosController {
    async create(req: Request, res: Response){

        const { cpf,nome,data_nasc,telefone,email,tipo,rua,bairro,cidade,complemento,cep,numero,crmv,cpf_supervisor } = req.body

        // if(!name){
        //     return res.status(400).json({mensagem: "sem nome"})
        // }

        try{

            const tipoUsuarioQuery = await tipoUsuarioRepository.findOneBy({TIPO: tipo})
            const cpfSupervisorQuery = await usuarioRepository.findOneBy({CPF: cpf_supervisor})

            if(tipoUsuarioQuery)
            {

                const newUsuario = usuarioRepository.create({
                    CPF: cpf, 
                    NOME: nome,
                    DATA_NASCIMENTO: data_nasc,
                    TELEFONE: telefone,
                    EMAIL: email,
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
                return res.status(404).json({message: "Tipo de usuário não encontrado"})
            }

           




        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }

    }

    async update(req: Request, res: Response){

        const { cpf,nome,data_nasc,telefone,email,tipo,rua,bairro,cidade,complemento,cep,numero,crmv,cpf_supervisor,id_usuario } = req.body

        var user = new UserDTOs(cpf, id_usuario, nome, data_nasc, telefone, email,true)

        try{

        const newTipoUsuariossss = await usuarioRepository.findOneBy({CPF: cpf})
        var Y = await tipoUsuarioRepository.findOneBy({TIPO: tipo })
        
         if(newTipoUsuariossss && Y){
            
             newTipoUsuariossss.ID_TIPO_USUARIO = Y
             await usuarioRepository.save(newTipoUsuariossss)
        
         }

            return res.status(201).json(newTipoUsuariossss)
        
        } catch (error){
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }
       






   
 

    }

    async list(req: Request, res: Response){
        try{

           const usuarios = await usuarioRepository.find({
                relations: {
                    ID_TIPO_USUARIO: true,
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
}