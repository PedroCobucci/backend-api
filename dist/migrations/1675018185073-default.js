"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1675018185073 = void 0;
class default1675018185073 {
    constructor() {
        this.name = 'default1675018185073';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD \`STATUS\` int NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP COLUMN \`STATUS\``);
    }
}
exports.default1675018185073 = default1675018185073;
