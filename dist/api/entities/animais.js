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
exports.ANIMAL = void 0;
const typeorm_1 = require("typeorm");
const avaliacoes_1 = require("./avaliacoes");
const consultas_1 = require("./consultas");
const usuarios_1 = require("./usuarios");
let ANIMAL = class ANIMAL {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ANIMAL.prototype, "ID_ANIMAL", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_1.USUARIO, USUARIO => USUARIO.ID_USUARIO, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_TUTOR' }),
    __metadata("design:type", usuarios_1.USUARIO)
], ANIMAL.prototype, "ID_TUTOR", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], ANIMAL.prototype, "ESPECIE", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'varchar', length: 45 }),
    __metadata("design:type", String)
], ANIMAL.prototype, "NOME", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consultas_1.CONSULTA, CONSULTA => CONSULTA.ID_ANIMAL_CONSULTADO),
    __metadata("design:type", Array)
], ANIMAL.prototype, "ID_ANIMAL_CONSULTADO", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => avaliacoes_1.AVALIACAO, AVALIACAO => AVALIACAO.ID_ANIMAL_ATENDIDO),
    __metadata("design:type", Array)
], ANIMAL.prototype, "ID_ANIMAL_ATENDIDO", void 0);
ANIMAL = __decorate([
    (0, typeorm_1.Entity)('ANIMAIS')
], ANIMAL);
exports.ANIMAL = ANIMAL;
