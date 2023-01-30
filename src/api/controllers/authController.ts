import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/usuarioRespository";


export class AuthController {
    async checkAuth(req: Request, res: Response){
        const {username, senha} = req.body

        try{

            const logarUsuario = await usuarioRepository.findOneBy({USERNAME: username, SENHA: senha, ATIVO: true})

            return logarUsuario ? res.status(200).json({auth: 'true'}) : res.status(401).json({message: 'Unauthorized'})

        }catch (error){
            return res.status(500).json({message: 'Internal Server Error'})
        }

    }
}