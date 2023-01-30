import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675114565486 implements MigrationInterface {
    name = 'default1675114565486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD \`USERNAME\` varchar(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP COLUMN \`USERNAME\``);
    }

}
