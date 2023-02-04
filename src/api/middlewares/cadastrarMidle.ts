import { NextFunction, Request, Response } from "express";
import 'dotenv/config'


export class cadastrarMidle{
    async checkToken(req: Request, res: Response, next: any){
        const auth = req.headers.authorization
        const token = process.env.CADASTRO_SECRET

        if(!auth){
            return res.status(401).json({error: true, message: "token não indentificado"})
        }


        try{

            const decoded = auth === token

            if(!decoded){
                return res.status(401).json({error: true,message: "O token está expirado!"})
            } else {
                next()
            }

            
        }catch (error){
            console.log(error)
            res.status(401).json({error: true, message: 'Token invalido'})
        }
    }
}