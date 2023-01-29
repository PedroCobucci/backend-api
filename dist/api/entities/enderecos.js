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
exports.ENDERECO = void 0;
const typeorm_1 = require("typeorm");
const usuarios_1 = require("./usuarios");
let ENDERECO = class ENDERECO {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ENDERECO.prototype, "ID_ENDERECO", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_1.USUARIO, USUARIO => USUARIO.ID_USUARIO, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_USUARIO' }),
    __metadata("design:type", usuarios_1.USUARIO)
], ENDERECO.prototype, "ID_USUARIO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], ENDERECO.prototype, "RUA", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], ENDERECO.prototype, "BAIRRO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], ENDERECO.prototype, "CIDADE", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], ENDERECO.prototype, "COMPLEMENTO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 9 }),
    __metadata("design:type", String)
], ENDERECO.prototype, "CEP", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ENDERECO.prototype, "NUMERO", void 0);
ENDERECO = __decorate([
    (0, typeorm_1.Entity)('ENDERECOS')
], ENDERECO);
exports.ENDERECO = ENDERECO;
