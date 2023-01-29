import { type } from "os";
import { Column, Entity, JoinColumn, LessThan, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AVALIACAO } from "./avaliacoes";
import { CONSULTA } from "./consultas";
import { USUARIO } from './usuarios'

@Entity('MEDICOS')
export class MEDICO{

    @PrimaryGeneratedColumn()
    ID_MEDICO: Number

    @OneToOne(() => USUARIO, USUARIO => USUARIO.USUARIO_MEDICO, {nullable: false, onDelete: "CASCADE"})
    @JoinColumn({name: 'ID_USUARIO'})
    ID_USUARIO: USUARIO

    @Column({type: 'varchar', length: 45})
    CRMV: string

    @Column({type: 'varchar', length: 14})
    CPF_SUPERVISOR: string

    @OneToMany(() => CONSULTA, CONSULTA => CONSULTA.ID_MEDICO_RESPONSAVEL)
    ID_CONSULTA: CONSULTA[]

    @OneToMany(() => AVALIACAO, AVALIACAO => AVALIACAO.ID_MEDICO_RESPONSAVEL)
    ID_AVALIACAO: AVALIACAO[]
}