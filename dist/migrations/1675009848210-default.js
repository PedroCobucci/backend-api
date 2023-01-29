"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675009848210 = void 0;
class default1675009848210 {
    constructor() {
        this.name = 'default1675009848210';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`AVALIACOES\` (\`ID_AVALIACAO\` int NOT NULL AUTO_INCREMENT, \`NOTA\` int NOT NULL, \`ID_MEDICO_RESPONSAVEL\` int NOT NULL, \`ID_ANIMAL_ATENDIDO\` int NOT NULL, \`ID_CONSULTA_REALIZADA\` int NOT NULL, UNIQUE INDEX \`REL_53f2cfd2f61cdf6bf534084697\` (\`ID_CONSULTA_REALIZADA\`), PRIMARY KEY (\`ID_AVALIACAO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` ADD CONSTRAINT \`FK_019c7424bc514f8124d3c07ea78\` FOREIGN KEY (\`ID_MEDICO_RESPONSAVEL\`) REFERENCES \`MEDICOS\`(\`ID_MEDICO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` ADD CONSTRAINT \`FK_57f7fad0b2b34bfa776b5814f57\` FOREIGN KEY (\`ID_ANIMAL_ATENDIDO\`) REFERENCES \`ANIMAIS\`(\`ID_ANIMAL\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` ADD CONSTRAINT \`FK_53f2cfd2f61cdf6bf5340846975\` FOREIGN KEY (\`ID_CONSULTA_REALIZADA\`) REFERENCES \`CONSULTAS\`(\`ID_CONSULTA\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` DROP FOREIGN KEY \`FK_53f2cfd2f61cdf6bf5340846975\``);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` DROP FOREIGN KEY \`FK_57f7fad0b2b34bfa776b5814f57\``);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` DROP FOREIGN KEY \`FK_019c7424bc514f8124d3c07ea78\``);
        await queryRunner.query(`DROP INDEX \`REL_53f2cfd2f61cdf6bf534084697\` ON \`AVALIACOES\``);
        await queryRunner.query(`DROP TABLE \`AVALIACOES\``);
    }
}
exports.default1675009848210 = default1675009848210;
