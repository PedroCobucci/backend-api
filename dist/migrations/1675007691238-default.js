"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675007691238 = void 0;
class default1675007691238 {
    constructor() {
        this.name = 'default1675007691238';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`ANIMAIS\` (\`ID_ANIMAL\` int NOT NULL AUTO_INCREMENT, \`ESPECIE\` varchar(45) NOT NULL, \`varchar\` varchar(45) NOT NULL, \`ID_TUTOR\` int NULL, PRIMARY KEY (\`ID_ANIMAL\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`MEDICOS\` (\`ID_MEDICO\` int NOT NULL AUTO_INCREMENT, \`CRMV\` varchar(45) NOT NULL, \`CPF_SUPERVISOR\` varchar(14) NOT NULL, PRIMARY KEY (\`ID_MEDICO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP FOREIGN KEY \`FK_4ee945c6ab652bebbbbcbe20bd2\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` CHANGE \`USUARIO_ID\` \`USUARIO_ID\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD CONSTRAINT \`FK_4ee945c6ab652bebbbbcbe20bd2\` FOREIGN KEY (\`USUARIO_ID\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD CONSTRAINT \`FK_39043a920533e8800c9fa5a8b77\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP FOREIGN KEY \`FK_39043a920533e8800c9fa5a8b77\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP FOREIGN KEY \`FK_4ee945c6ab652bebbbbcbe20bd2\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` CHANGE \`USUARIO_ID\` \`USUARIO_ID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD CONSTRAINT \`FK_4ee945c6ab652bebbbbcbe20bd2\` FOREIGN KEY (\`USUARIO_ID\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`MEDICOS\``);
        await queryRunner.query(`DROP TABLE \`ANIMAIS\``);
    }
}
exports.default1675007691238 = default1675007691238;
