import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675028640811 implements MigrationInterface {
    name = 'default1675028640811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP FOREIGN KEY \`FK_7aff2720abcf0d82da3a6105eb7\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD CONSTRAINT \`FK_7aff2720abcf0d82da3a6105eb7\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP FOREIGN KEY \`FK_7aff2720abcf0d82da3a6105eb7\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD CONSTRAINT \`FK_7aff2720abcf0d82da3a6105eb7\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
