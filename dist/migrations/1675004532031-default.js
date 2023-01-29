"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675004532031 = void 0;
class default1675004532031 {
    constructor() {
        this.name = 'default1675004532031';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP FOREIGN KEY \`FK_d33bea878b64c37ebb84a2d96a1\``);
        await queryRunner.query(`DROP INDEX \`REL_d33bea878b64c37ebb84a2d96a\` ON \`TIPO_USUARIOS\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP COLUMN \`ID_USUARIO\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP COLUMN \`usuario_id\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD \`USUARIO_ID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD UNIQUE INDEX \`IDX_4ee945c6ab652bebbbbcbe20bd\` (\`USUARIO_ID\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4ee945c6ab652bebbbbcbe20bd\` ON \`TIPO_USUARIOS\` (\`USUARIO_ID\`)`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD CONSTRAINT \`FK_4ee945c6ab652bebbbbcbe20bd2\` FOREIGN KEY (\`USUARIO_ID\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP FOREIGN KEY \`FK_4ee945c6ab652bebbbbcbe20bd2\``);
        await queryRunner.query(`DROP INDEX \`REL_4ee945c6ab652bebbbbcbe20bd\` ON \`TIPO_USUARIOS\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP INDEX \`IDX_4ee945c6ab652bebbbbcbe20bd\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` DROP COLUMN \`USUARIO_ID\``);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD \`usuario_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD \`ID_USUARIO\` int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_d33bea878b64c37ebb84a2d96a\` ON \`TIPO_USUARIOS\` (\`usuario_id\`)`);
        await queryRunner.query(`ALTER TABLE \`TIPO_USUARIOS\` ADD CONSTRAINT \`FK_d33bea878b64c37ebb84a2d96a1\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.default1675004532031 = default1675004532031;
