import { NextFunction, Request, Response } from "express";
import { usuarioRepository } from "../repositories/usuarioRespository";
import { promisify } from "util";
import jwt from "jsonwebtoken";
import 'dotenv/config'


export class AuthMidle{
    async checkToken(req: Request, res: Response, next: any){
        const auth = req.headers.authorization;

        if(!auth){
            return res.status(401).json({error: true, message: "token não indentificado"})
        }


        try{

            const decoded = jwt.verify(auth, "e13bf746f67fbbee5df6926e86cad5ec6a2cc305643d3d849b1bda1ba4f85062");

            if(!decoded){
                return res.status(401).json({error: true,message: "O token está expirado!"})
            } else {
                next();
            }

            
        }catch (error){
            console.log(error)
            res.status(401).json({error: true, message: 'Token invalido'})
        }
    }
}