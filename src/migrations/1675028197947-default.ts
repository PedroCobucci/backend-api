import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675028197947 implements MigrationInterface {
    name = 'default1675028197947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP FOREIGN KEY \`FK_bfc5f91d0ee04f08eda81b91caf\``);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` CHANGE \`ID_TIPO_USUARIO\` \`ID_TIPO_USUARIO\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD CONSTRAINT \`FK_bfc5f91d0ee04f08eda81b91caf\` FOREIGN KEY (\`ID_TIPO_USUARIO\`) REFERENCES \`TIPO_USUARIOS\`(\`TIPO_ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP FOREIGN KEY \`FK_bfc5f91d0ee04f08eda81b91caf\``);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` CHANGE \`ID_TIPO_USUARIO\` \`ID_TIPO_USUARIO\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD CONSTRAINT \`FK_bfc5f91d0ee04f08eda81b91caf\` FOREIGN KEY (\`ID_TIPO_USUARIO\`) REFERENCES \`TIPO_USUARIOS\`(\`TIPO_ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
