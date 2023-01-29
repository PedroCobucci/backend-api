"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuarioController = void 0;
const tipoUsuarioRepository_1 = require("../repositories/tipoUsuarioRepository");
class tipoUsuarioController {
    async create(req, res) {
        const {} = req.body;
        const {} = req.params;
        try {
            const newTipoUsuario = tipoUsuarioRepository_1.tipoUsuarioRepository.create({});
            await tipoUsuarioRepository_1.tipoUsuarioRepository.save(newTipoUsuario);
            return res.status(201).json(newTipoUsuario);
        }
        catch (error) {
            return res.status(500).json({ message: 'Internal Serve Error' });
        }
    }
}
exports.tipoUsuarioController = tipoUsuarioController;
