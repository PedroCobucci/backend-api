import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675028563864 implements MigrationInterface {
    name = 'default1675028563864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD \`ATIVO\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP COLUMN \`ATIVO\``);
    }

}
