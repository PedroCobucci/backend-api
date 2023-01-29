"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const tipoUsuarioRepository_1 = require("../repositories/tipoUsuarioRepository");
const usuarioRespository_1 = require("../repositories/usuarioRespository");
class UsuariosController {
    async create(req, res) {
        const { cpf, nome, data_nasc, telefone, email, tipo } = req.body;
        // if(!name){
        //     return res.status(400).json({mensagem: "sem nome"})
        // }
        try {
            const newUsuario = usuarioRespository_1.usuarioRepository.create({
                CPF: cpf,
                NOME: nome,
                DATA_NASCIMENTO: data_nasc,
                TELEFONE: telefone,
                EMAIL: email
            });
            const newTipoUsuario = tipoUsuarioRepository_1.tipoUsuarioRepository.create({
                TIPO: tipo
            });
            await usuarioRespository_1.usuarioRepository.save(newUsuario);
            await tipoUsuarioRepository_1.tipoUsuarioRepository.save(newTipoUsuario);
            return res.status(201).json(newUsuario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
exports.UsuariosController = UsuariosController;
