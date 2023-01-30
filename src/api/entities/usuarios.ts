import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ENDERECO } from "./enderecos";
import { MEDICO } from "./medicos";
import { TIPO_USUARIO } from "./tipoUsuario";

@Entity('USUARIOS')
export class USUARIO{

    @PrimaryGeneratedColumn()
    ID_USUARIO: number

    @Column({  type: 'varchar', length: 14  })
    CPF: string

    @Column({ type: 'varchar', length: 55})
    NOME: string
    
    @Column({type: 'date'})
    DATA_NASCIMENTO: Date

    @Column({ type: 'varchar'})
    TELEFONE: string

    @Column({type: 'varchar'})
    EMAIL: string

    @Column({type: 'boolean'})
    ATIVO: boolean


    @ManyToOne(() => TIPO_USUARIO, TIPO_USUARIO => TIPO_USUARIO.USUARIO, {nullable: false,onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({name: "ID_TIPO_USUARIO"})
    ID_TIPO_USUARIO: TIPO_USUARIO

    @OneToMany(() => ENDERECO, ENDERECO => ENDERECO.ID_USUARIO, {onDelete: "CASCADE"})
    ENDERECO: ENDERECO

    @OneToOne(() => MEDICO, MEDICO => MEDICO.ID_USUARIO, {onDelete: "CASCADE"})
    USUARIO_MEDICO: MEDICO
}