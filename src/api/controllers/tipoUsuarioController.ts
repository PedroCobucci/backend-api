import { Request, Response } from "express";
import { isDataView } from "util/types";
import { tipoUsuarioRepository } from "../repositories/tipoUsuarioRepository";

export class tipoUsuarioController{
    async create(req: Request, res: Response){
        const { tipo } = req.body
        
        const {} = req.params

        try{

            const tipoQuery = await tipoUsuarioRepository.findOneBy({TIPO: tipo})


            if(!tipoQuery)
            {
                const newTipoUsuario = tipoUsuarioRepository.create({
                    TIPO: tipo
                })
                await tipoUsuarioRepository.save(newTipoUsuario)

                return res.status(201).json(newTipoUsuario)
            }
            else
            {

                return res.status(409).json({message: 'Tipo Já cadastrado'})

            }


            

            

        }catch (error){


            return res.status(500).json({message: 'Internal Serve Error'})
        }
    }

    
}