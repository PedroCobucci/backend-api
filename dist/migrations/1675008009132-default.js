"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675008009132 = void 0;
class default1675008009132 {
    constructor() {
        this.name = 'default1675008009132';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD \`ID_USUARIO\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD UNIQUE INDEX \`IDX_7aff2720abcf0d82da3a6105eb\` (\`ID_USUARIO\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_7aff2720abcf0d82da3a6105eb\` ON \`MEDICOS\` (\`ID_USUARIO\`)`);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD CONSTRAINT \`FK_7aff2720abcf0d82da3a6105eb7\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP FOREIGN KEY \`FK_7aff2720abcf0d82da3a6105eb7\``);
        await queryRunner.query(`DROP INDEX \`REL_7aff2720abcf0d82da3a6105eb\` ON \`MEDICOS\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP INDEX \`IDX_7aff2720abcf0d82da3a6105eb\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP COLUMN \`ID_USUARIO\``);
    }
}
exports.default1675008009132 = default1675008009132;
