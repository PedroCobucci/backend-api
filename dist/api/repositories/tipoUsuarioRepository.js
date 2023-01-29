"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuarioRepository = void 0;
const data_source_1 = require("../../config/data-source");
const tipoUsuario_1 = require("../entities/tipoUsuario");
exports.tipoUsuarioRepository = data_source_1.AppDataSource.getRepository(tipoUsuario_1.TIPO_USUARIO);
