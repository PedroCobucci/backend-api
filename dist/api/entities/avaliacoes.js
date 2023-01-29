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
exports.AVALIACAO = void 0;
const typeorm_1 = require("typeorm");
const animais_1 = require("./animais");
const consultas_1 = require("./consultas");
const medicos_1 = require("./medicos");
let AVALIACAO = class AVALIACAO {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AVALIACAO.prototype, "ID_AVALIACAO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], AVALIACAO.prototype, "NOTA", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medicos_1.MEDICO, MEDICO => MEDICO.ID_MEDICO, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_MEDICO_RESPONSAVEL' }),
    __metadata("design:type", medicos_1.MEDICO)
], AVALIACAO.prototype, "ID_MEDICO_RESPONSAVEL", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => animais_1.ANIMAL, ANIMAL => ANIMAL.ID_ANIMAL, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_ANIMAL_ATENDIDO' }),
    __metadata("design:type", animais_1.ANIMAL)
], AVALIACAO.prototype, "ID_ANIMAL_ATENDIDO", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => consultas_1.CONSULTA, CONSULTA => CONSULTA.ID_CONSULTA, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_CONSULTA_REALIZADA' }),
    __metadata("design:type", consultas_1.CONSULTA)
], AVALIACAO.prototype, "ID_CONSULTA_REALIZADA", void 0);
AVALIACAO = __decorate([
    (0, typeorm_1.Entity)('AVALIACOES')
], AVALIACAO);
exports.AVALIACAO = AVALIACAO;
