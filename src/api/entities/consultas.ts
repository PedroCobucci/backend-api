import { type } from "os";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ANIMAL } from "./animais";
import { AVALIACAO } from "./avaliacoes";
import { MEDICO } from "./medicos";
import { USUARIO } from './usuarios'

@Entity('CONSULTAS')
export class CONSULTA{

    @PrimaryGeneratedColumn()
    ID_CONSULTA: number

    @ManyToOne(() => MEDICO, MEDICO => MEDICO.ID_MEDICO, {nullable: false})
    @JoinColumn({name: 'ID_MEDICO_RESPONSAVEL'})
    ID_MEDICO_RESPONSAVEL: MEDICO

    @ManyToOne(() => ANIMAL, ANIMAL => ANIMAL.ID_ANIMAL, {nullable: false})
    @JoinColumn({name: 'ID_ANIMAL_CONSULTADO'})
    ID_ANIMAL_CONSULTADO: ANIMAL

    @Column({type: 'longtext'})
    DOCUMENTOS: string

    @Column({type: 'int'})
    FEEDBACK_ATENDIMENTO: number

    @Column({type: 'date'})
    DATA_ATENDIMENTO: Date

    @Column({type: 'int'})
    STATUS: number

    @Column({type: 'boolean'})
    ATIVO: boolean

    @OneToOne(() => AVALIACAO, AVALIACAO => AVALIACAO.ID_CONSULTA_REALIZADA)
    ID_AVALIACAO_REALIZADA: AVALIACAO


}