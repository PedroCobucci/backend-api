import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675385037937 implements MigrationInterface {
    name = 'default1675385037937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP COLUMN \`STATUS\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD \`STATUS\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP COLUMN \`STATUS\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD \`STATUS\` int NOT NULL`);
    }

}
