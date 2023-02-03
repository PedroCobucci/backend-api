import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675386440423 implements MigrationInterface {
    name = 'default1675386440423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_cb685f1e36cabe0690af187daaf\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` CHANGE \`uSUARIOIDUSUARIO\` \`ID_TUTOR\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_37a50c4afb5e6465190d988eb65\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_37a50c4afb5e6465190d988eb65\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` CHANGE \`ID_TUTOR\` \`uSUARIOIDUSUARIO\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_cb685f1e36cabe0690af187daaf\` FOREIGN KEY (\`uSUARIOIDUSUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
