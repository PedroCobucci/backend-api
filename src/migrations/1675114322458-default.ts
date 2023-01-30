import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675114322458 implements MigrationInterface {
    name = 'default1675114322458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP FOREIGN KEY \`FK_bfc5f91d0ee04f08eda81b91caf\``);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD \`SENHA\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD CONSTRAINT \`FK_bfc5f91d0ee04f08eda81b91caf\` FOREIGN KEY (\`ID_TIPO_USUARIO\`) REFERENCES \`TIPO_USUARIOS\`(\`TIPO_ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP FOREIGN KEY \`FK_bfc5f91d0ee04f08eda81b91caf\``);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP COLUMN \`SENHA\``);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD CONSTRAINT \`FK_bfc5f91d0ee04f08eda81b91caf\` FOREIGN KEY (\`ID_TIPO_USUARIO\`) REFERENCES \`TIPO_USUARIOS\`(\`TIPO_ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
