import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675386267959 implements MigrationInterface {
    name = 'default1675386267959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD \`uSUARIOIDUSUARIO\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_cb685f1e36cabe0690af187daaf\` FOREIGN KEY (\`uSUARIOIDUSUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_cb685f1e36cabe0690af187daaf\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP COLUMN \`uSUARIOIDUSUARIO\``);
    }

}
