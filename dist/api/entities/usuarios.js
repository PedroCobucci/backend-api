"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USUARIO = void 0;
const typeorm_1 = require("typeorm");
const enderecos_1 = require("./enderecos");
const medicos_1 = require("./medicos");
const tipoUsuario_1 = require("./tipoUsuario");
let USUARIO = class USUARIO {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], USUARIO.prototype, "ID_USUARIO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 14 }),
    __metadata("design:type", String)
], USUARIO.prototype, "CPF", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 55 }),
    __metadata("design:type", String)
], USUARIO.prototype, "NOME", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], USUARIO.prototype, "DATA_NASCIMENTO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], USUARIO.prototype, "TELEFONE", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], USUARIO.prototype, "EMAIL", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tipoUsuario_1.TIPO_USUARIO, TIPO_USUARIO => TIPO_USUARIO.USUARIO_ID),
    __metadata("design:type", tipoUsuario_1.TIPO_USUARIO)
], USUARIO.prototype, "TIPO_USUARIO", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enderecos_1.ENDERECO, ENDERECO => ENDERECO.ID_USUARIO),
    __metadata("design:type", enderecos_1.ENDERECO)
], USUARIO.prototype, "ENDERECO", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicos_1.MEDICO, MEDICO => MEDICO.ID_USUARIO),
    __metadata("design:type", medicos_1.MEDICO)
], USUARIO.prototype, "USUARIO_MEDICO", void 0);
USUARIO = __decorate([
    (0, typeorm_1.Entity)('USUARIOS')
], USUARIO);
exports.USUARIO = USUARIO;
