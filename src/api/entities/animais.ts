import { type } from "os";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AVALIACAO } from "./avaliacoes";
import { CONSULTA } from "./consultas";
import { USUARIO } from './usuarios'

@Entity('ANIMAIS')
export class ANIMAL{
    @PrimaryGeneratedColumn()
    ID_ANIMAL: number

    @ManyToOne(() => USUARIO, USUARIO => USUARIO.ANIMAL_DE_ESTIMACAO, {nullable: false, onDelete: 'CASCADE'})
    @JoinColumn({name: 'ID_TUTOR'})
    ID_TUTOR: USUARIO

    @Column({type: 'varchar', length: 45})
    ESPECIE: String

    @Column({name: 'varchar', length: 45})
    NOME: String

    @Column({type: 'boolean'})
    ATIVO: boolean

    @OneToMany(() => CONSULTA, CONSULTA => CONSULTA.ID_ANIMAL_CONSULTADO)
    ID_ANIMAL_CONSULTADO: CONSULTA[]

    @OneToMany(() => AVALIACAO, AVALIACAO => AVALIACAO.ID_ANIMAL_ATENDIDO)
    ID_ANIMAL_ATENDIDO: AVALIACAO[]
}