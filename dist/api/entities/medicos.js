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
exports.MEDICO = void 0;
const typeorm_1 = require("typeorm");
const avaliacoes_1 = require("./avaliacoes");
const consultas_1 = require("./consultas");
const usuarios_1 = require("./usuarios");
let MEDICO = class MEDICO {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MEDICO.prototype, "ID_MEDICO", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuarios_1.USUARIO, USUARIO => USUARIO.USUARIO_MEDICO, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_USUARIO' }),
    __metadata("design:type", usuarios_1.USUARIO)
], MEDICO.prototype, "ID_USUARIO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], MEDICO.prototype, "CRMV", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 14 }),
    __metadata("design:type", String)
], MEDICO.prototype, "CPF_SUPERVISOR", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consultas_1.CONSULTA, CONSULTA => CONSULTA.ID_MEDICO_RESPONSAVEL),
    __metadata("design:type", Array)
], MEDICO.prototype, "ID_CONSULTA", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacoes_1.AVALIACAO, AVALIACAO => AVALIACAO.ID_MEDICO_RESPONSAVEL),
    __metadata("design:type", Array)
], MEDICO.prototype, "ID_AVALIACAO", void 0);
MEDICO = __decorate([
    (0, typeorm_1.Entity)('MEDICOS')
], MEDICO);
exports.MEDICO = MEDICO;
