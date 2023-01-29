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
exports.TIPO_USUARIO = void 0;
const typeorm_1 = require("typeorm");
const usuarios_1 = require("./usuarios");
let TIPO_USUARIO = class TIPO_USUARIO {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TIPO_USUARIO.prototype, "TIPO_ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], TIPO_USUARIO.prototype, "TIPO", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuarios_1.USUARIO, USUARIO => USUARIO.ID_USUARIO, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'USUARIO_ID' }),
    __metadata("design:type", usuarios_1.USUARIO)
], TIPO_USUARIO.prototype, "USUARIO_ID", void 0);
TIPO_USUARIO = __decorate([
    (0, typeorm_1.Entity)('TIPO_USUARIOS')
], TIPO_USUARIO);
exports.TIPO_USUARIO = TIPO_USUARIO;
