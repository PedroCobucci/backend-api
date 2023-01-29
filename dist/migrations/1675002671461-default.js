"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675002671461 = void 0;
class default1675002671461 {
    constructor() {
        this.name = 'default1675002671461';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`USUARIOS\` (\`ID_USUARIO\` int NOT NULL AUTO_INCREMENT, \`CPF\` varchar(14) NOT NULL, \`NOME\` varchar(55) NOT NULL, \`DATA_NASCIMENTO\` date NOT NULL, \`TELEFONE\` varchar(255) NOT NULL, \`EMAIL\` varchar(255) NOT NULL, PRIMARY KEY (\`ID_USUARIO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`TIPO_USUARIOS\` (\`TIPO_ID\` int NOT NULL AUTO_INCREMENT, \`TIPO\` text NOT NULL, \`ID_USUARIO\` int NOT NULL, \`usuario_id\` int NULL, UNIQUE INDEX \`REL_d33bea878b64c37ebb84a2d96a\` (\`usuario_id\`), PRIMARY KEY (\`TIPO_ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD CONSTRAINT \`FK_d33bea878b64c37ebb84a2d96a1\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP FOREIGN KEY \`FK_d33bea878b64c37ebb84a2d96a1\``);
        await queryRunner.query(`DROP INDEX \`REL_d33bea878b64c37ebb84a2d96a\` ON \`TIPO_USUARIOS\``);
        await queryRunner.query(`DROP TABLE \`TIPO_USUARIOS\``);
        await queryRunner.query(`DROP TABLE \`USUARIOS\``);
    }
}
exports.default1675002671461 = default1675002671461;
