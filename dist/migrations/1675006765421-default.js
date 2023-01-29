"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675006765421 = void 0;
class default1675006765421 {
    constructor() {
        this.name = 'default1675006765421';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` DROP FOREIGN KEY \`FK_7384fcf0dcab7f261b9fa71af96\``);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` CHANGE \`ID_USUARIO\` \`ID_USUARIO\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` ADD CONSTRAINT \`FK_7384fcf0dcab7f261b9fa71af96\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` DROP FOREIGN KEY \`FK_7384fcf0dcab7f261b9fa71af96\``);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` CHANGE \`ID_USUARIO\` \`ID_USUARIO\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` ADD CONSTRAINT \`FK_7384fcf0dcab7f261b9fa71af96\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.default1675006765421 = default1675006765421;
