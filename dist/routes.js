"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoUsuarioController_1 = require("./api/controllers/tipoUsuarioController");
const usuarioController_1 = require("./api/controllers/usuarioController");
const routes = (0, express_1.Router)();
routes.post('/usuarios', new usuarioController_1.UsuariosController().create);
routes.post('/tipo', new tipoUsuarioController_1.tipoUsuarioController().create);
exports.default = routes;
