"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675008084760 = void 0;
class default1675008084760 {
    constructor() {
        this.name = 'default1675008084760';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_7aff2720abcf0d82da3a6105eb\` ON \`MEDICOS\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP FOREIGN KEY \`FK_7aff2720abcf0d82da3a6105eb7\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` CHANGE \`ID_USUARIO\` \`ID_USUARIO\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP FOREIGN KEY \`FK_39043a920533e8800c9fa5a8b77\``);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` CHANGE \`ID_TUTOR\` \`ID_TUTOR\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD CONSTRAINT \`FK_7aff2720abcf0d82da3a6105eb7\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD CONSTRAINT \`FK_39043a920533e8800c9fa5a8b77\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP FOREIGN KEY \`FK_39043a920533e8800c9fa5a8b77\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP FOREIGN KEY \`FK_7aff2720abcf0d82da3a6105eb7\``);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` CHANGE \`ID_TUTOR\` \`ID_TUTOR\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD CONSTRAINT \`FK_39043a920533e8800c9fa5a8b77\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` CHANGE \`ID_USUARIO\` \`ID_USUARIO\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD CONSTRAINT \`FK_7aff2720abcf0d82da3a6105eb7\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_7aff2720abcf0d82da3a6105eb\` ON \`MEDICOS\` (\`ID_USUARIO\`)`);
    }
}
exports.default1675008084760 = default1675008084760;
