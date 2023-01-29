"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675006510828 = void 0;
class default1675006510828 {
    constructor() {
        this.name = 'default1675006510828';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_4ee945c6ab652bebbbbcbe20bd\` ON \`TIPO_USUARIOS\``);
        await queryRunner.query(`CREATE TABLE \`ENDERECOS\` (\`ID_ENDERECO\` int NOT NULL AUTO_INCREMENT, \`RUA\` varchar(60) NOT NULL, \`BAIRRO\` varchar(60) NOT NULL, \`CIDADE\` varchar(60) NOT NULL, \`COMPLEMENTO\` varchar(45) NOT NULL, \`CEP\` varchar(9) NOT NULL, \`NUMERO\` int NOT NULL, \`ID_USUARIO\` int NULL, PRIMARY KEY (\`ID_ENDERECO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` ADD CONSTRAINT \`FK_7384fcf0dcab7f261b9fa71af96\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` DROP FOREIGN KEY \`FK_7384fcf0dcab7f261b9fa71af96\``);
        await queryRunner.query(`DROP TABLE \`ENDERECOS\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_4ee945c6ab652bebbbbcbe20bd\` ON \`TIPO_USUARIOS\` (\`USUARIO_ID\`)`);
    }
}
exports.default1675006510828 = default1675006510828;
