import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/usuarioRespository";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export class AuthController {
    async checkAuth(req: Request, res: Response){
        const {username, senha} = req.body

        try{

            const logarUsuario = await usuarioRepository.findOneBy({USERNAME: username, SENHA: senha, ATIVO: true})

            return logarUsuario ? res.status(200).json({
                user: {
                    cpf: logarUsuario.CPF,
                    username: logarUsuario.USERNAME
                  },
                  token: jwt.sign(
                    {id: logarUsuario.ID_USUARIO}, 
                    "e13bf746f67fbbee5df6926e86cad5ec6a2cc305643d3d849b1bda1ba4f85062",
                    {expiresIn: process.env.EXPIRE } 
                  )
            }
            ) : res.status(401).json({message: 'Unauthorized'})

        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }

    }
}