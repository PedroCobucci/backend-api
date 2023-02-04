import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/usuarioRespository";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export class AuthController {
    async checkAuth(req: Request, res: Response){
        const {username, senha} = req.body
        const token: string = process.env.SECRET ? process.env.SECRET : ""
        
        try{

            const logarUsuario = await usuarioRepository.findOneBy({USERNAME: username, SENHA: senha, ATIVO: true})

            return logarUsuario ? res.status(200).json({
                user: {
                    cpf: logarUsuario.CPF,
                    username: logarUsuario.USERNAME
                  },
                  token: jwt.sign(
                    {id: logarUsuario.ID_USUARIO}, 
                    token,
                    {expiresIn: process.env.EXPIRE } 
                  )
            }
            ) : res.status(401).json({message: 'Unauthorized'})

        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }

    }
}