import { type } from "os";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ANIMAL } from "./animais";
import { CONSULTA } from "./consultas";
import { MEDICO } from "./medicos";
import { USUARIO } from './usuarios'

@Entity('AVALIACOES')
export class AVALIACAO{

    @PrimaryGeneratedColumn()
    ID_AVALIACAO: number

    @Column({type: 'int'})
    NOTA: number

    @ManyToOne(() => MEDICO, MEDICO => MEDICO.ID_MEDICO, {nullable: false})
    @JoinColumn({name: 'ID_MEDICO_RESPONSAVEL'})
    ID_MEDICO_RESPONSAVEL: MEDICO

    @ManyToOne(() => ANIMAL, ANIMAL => ANIMAL.ID_ANIMAL, {nullable: false})
    @JoinColumn({name: 'ID_ANIMAL_ATENDIDO'})
    ID_ANIMAL_ATENDIDO: ANIMAL

    @OneToOne(() => CONSULTA, CONSULTA => CONSULTA.ID_CONSULTA, {nullable: false})
    @JoinColumn({name: 'ID_CONSULTA_REALIZADA'})
    ID_CONSULTA_REALIZADA: CONSULTA

}