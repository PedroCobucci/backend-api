"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
const data_source_1 = require("../../config/data-source");
const usuarios_1 = require("../entities/usuarios");
exports.usuarioRepository = data_source_1.AppDataSource.getRepository(usuarios_1.USUARIO);
