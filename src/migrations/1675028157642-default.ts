import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675028157642 implements MigrationInterface {
    name = 'default1675028157642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ENDERECOS\` (\`ID_ENDERECO\` int NOT NULL AUTO_INCREMENT, \`RUA\` varchar(60) NOT NULL, \`BAIRRO\` varchar(60) NOT NULL, \`CIDADE\` varchar(60) NOT NULL, \`COMPLEMENTO\` varchar(45) NULL, \`CEP\` varchar(9) NOT NULL, \`NUMERO\` int NOT NULL, \`ID_USUARIO\` int NOT NULL, PRIMARY KEY (\`ID_ENDERECO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`TIPO_USUARIOS\` (\`TIPO_ID\` int NOT NULL AUTO_INCREMENT, \`TIPO\` text NOT NULL, PRIMARY KEY (\`TIPO_ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`USUARIOS\` (\`ID_USUARIO\` int NOT NULL AUTO_INCREMENT, \`CPF\` varchar(14) NOT NULL, \`NOME\` varchar(55) NOT NULL, \`DATA_NASCIMENTO\` date NOT NULL, \`TELEFONE\` varchar(255) NOT NULL, \`EMAIL\` varchar(255) NOT NULL, \`ID_TIPO_USUARIO\` int NULL, PRIMARY KEY (\`ID_USUARIO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`MEDICOS\` (\`ID_MEDICO\` int NOT NULL AUTO_INCREMENT, \`CRMV\` varchar(45) NOT NULL, \`CPF_SUPERVISOR\` varchar(14) NOT NULL, \`ID_USUARIO\` int NOT NULL, UNIQUE INDEX \`REL_7aff2720abcf0d82da3a6105eb\` (\`ID_USUARIO\`), PRIMARY KEY (\`ID_MEDICO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CONSULTAS\` (\`ID_CONSULTA\` int NOT NULL AUTO_INCREMENT, \`DOCUMENTOS\` longtext NOT NULL, \`FEEDBACK_ATENDIMENTO\` int NOT NULL, \`DATA_ATENDIMENTO\` date NOT NULL, \`STATUS\` int NOT NULL, \`ID_MEDICO_RESPONSAVEL\` int NOT NULL, \`ID_ANIMAL_CONSULTADO\` int NOT NULL, PRIMARY KEY (\`ID_CONSULTA\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ANIMAIS\` (\`ID_ANIMAL\` int NOT NULL AUTO_INCREMENT, \`ESPECIE\` varchar(45) NOT NULL, \`varchar\` varchar(45) NOT NULL, \`ID_TUTOR\` int NOT NULL, PRIMARY KEY (\`ID_ANIMAL\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`AVALIACOES\` (\`ID_AVALIACAO\` int NOT NULL AUTO_INCREMENT, \`NOTA\` int NOT NULL, \`ID_MEDICO_RESPONSAVEL\` int NOT NULL, \`ID_ANIMAL_ATENDIDO\` int NOT NULL, \`ID_CONSULTA_REALIZADA\` int NOT NULL, UNIQUE INDEX \`REL_53f2cfd2f61cdf6bf534084697\` (\`ID_CONSULTA_REALIZADA\`), PRIMARY KEY (\`ID_AVALIACAO\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` ADD CONSTRAINT \`FK_7384fcf0dcab7f261b9fa71af96\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` ADD CONSTRAINT \`FK_bfc5f91d0ee04f08eda81b91caf\` FOREIGN KEY (\`ID_TIPO_USUARIO\`) REFERENCES \`TIPO_USUARIOS\`(\`TIPO_ID\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` ADD CONSTRAINT \`FK_7aff2720abcf0d82da3a6105eb7\` FOREIGN KEY (\`ID_USUARIO\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_d729f44c08d01ad4d5cd64f747b\` FOREIGN KEY (\`ID_MEDICO_RESPONSAVEL\`) REFERENCES \`MEDICOS\`(\`ID_MEDICO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` ADD CONSTRAINT \`FK_b3092617f92721eb353dfd62dda\` FOREIGN KEY (\`ID_ANIMAL_CONSULTADO\`) REFERENCES \`ANIMAIS\`(\`ID_ANIMAL\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` ADD CONSTRAINT \`FK_39043a920533e8800c9fa5a8b77\` FOREIGN KEY (\`ID_TUTOR\`) REFERENCES \`USUARIOS\`(\`ID_USUARIO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` ADD CONSTRAINT \`FK_019c7424bc514f8124d3c07ea78\` FOREIGN KEY (\`ID_MEDICO_RESPONSAVEL\`) REFERENCES \`MEDICOS\`(\`ID_MEDICO\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` ADD CONSTRAINT \`FK_57f7fad0b2b34bfa776b5814f57\` FOREIGN KEY (\`ID_ANIMAL_ATENDIDO\`) REFERENCES \`ANIMAIS\`(\`ID_ANIMAL\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` ADD CONSTRAINT \`FK_53f2cfd2f61cdf6bf5340846975\` FOREIGN KEY (\`ID_CONSULTA_REALIZADA\`) REFERENCES \`CONSULTAS\`(\`ID_CONSULTA\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` DROP FOREIGN KEY \`FK_53f2cfd2f61cdf6bf5340846975\``);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` DROP FOREIGN KEY \`FK_57f7fad0b2b34bfa776b5814f57\``);
        await queryRunner.query(`ALTER TABLE \`AVALIACOES\` DROP FOREIGN KEY \`FK_019c7424bc514f8124d3c07ea78\``);
        await queryRunner.query(`ALTER TABLE \`ANIMAIS\` DROP FOREIGN KEY \`FK_39043a920533e8800c9fa5a8b77\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_b3092617f92721eb353dfd62dda\``);
        await queryRunner.query(`ALTER TABLE \`CONSULTAS\` DROP FOREIGN KEY \`FK_d729f44c08d01ad4d5cd64f747b\``);
        await queryRunner.query(`ALTER TABLE \`MEDICOS\` DROP FOREIGN KEY \`FK_7aff2720abcf0d82da3a6105eb7\``);
        await queryRunner.query(`ALTER TABLE \`USUARIOS\` DROP FOREIGN KEY \`FK_bfc5f91d0ee04f08eda81b91caf\``);
        await queryRunner.query(`ALTER TABLE \`ENDERECOS\` DROP FOREIGN KEY \`FK_7384fcf0dcab7f261b9fa71af96\``);
        await queryRunner.query(`DROP INDEX \`REL_53f2cfd2f61cdf6bf534084697\` ON \`AVALIACOES\``);
        await queryRunner.query(`DROP TABLE \`AVALIACOES\``);
        await queryRunner.query(`DROP TABLE \`ANIMAIS\``);
        await queryRunner.query(`DROP TABLE \`CONSULTAS\``);
        await queryRunner.query(`DROP INDEX \`REL_7aff2720abcf0d82da3a6105eb\` ON \`MEDICOS\``);
        await queryRunner.query(`DROP TABLE \`MEDICOS\``);
        await queryRunner.query(`DROP TABLE \`USUARIOS\``);
        await queryRunner.query(`DROP TABLE \`TIPO_USUARIOS\``);
        await queryRunner.query(`DROP TABLE \`ENDERECOS\``);
    }

}
