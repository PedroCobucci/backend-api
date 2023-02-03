import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675381452029 implements MigrationInterface {
    name = 'default1675381452029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP FOREIGN KEY \`FK_39043a920533e8800c9fa5a8b77\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD \`ATIVO\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD \`ATIVO\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD CONSTRAINT \`FK_39043a920533e8800c9fa5a8b77\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP FOREIGN KEY \`FK_39043a920533e8800c9fa5a8b77\``);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP COLUMN \`ATIVO\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP COLUMN \`ATIVO\``);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD CONSTRAINT \`FK_39043a920533e8800c9fa5a8b77\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
