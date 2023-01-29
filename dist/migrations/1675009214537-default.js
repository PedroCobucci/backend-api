"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675009214537 = void 0;
class default1675009214537 {
    constructor() {
        this.name = 'default1675009214537';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`CONSULTAS\` (\`ID_CONSULTA\` int NOT NULL AUTO_INCREMENT, \`DOCUMENTOS\` longtext NOT NULL, \`FEEDBACK_ATENDIMENTO\` int NOT NULL, \`DATA_ATENDIMENTO\` date NOT NULL, \`ID_MEDICO_RESPONSAVEL\` int NOT NULL, \`ID_ANIMAL_CONSULTADO\` int NOT NULL, PRIMARY KEY (\`ID_CONSULTA\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_d729f44c08d01ad4d5cd64f747b\` FOREIGN KEY (\`ID_MEDICO_RESPONSAVEL\`) REFERENCES \`MEDICOS\`(\`ID_MEDICO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_b3092617f92721eb353dfd62dda\` FOREIGN KEY (\`ID_ANIMAL_CONSULTADO\`) REFERENCES \`ANIMAIS\`(\`ID_ANIMAL\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_b3092617f92721eb353dfd62dda\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_d729f44c08d01ad4d5cd64f747b\``);
        await queryRunner.query(`DROP TABLE \`CONSULTAS\``);
    }
}
exports.default1675009214537 = default1675009214537;
