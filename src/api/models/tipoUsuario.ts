import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { USUARIO } from './usuarios'

@Entity('TIPO_USUARIOS')
export class TIPO_USUARIO{
    @PrimaryGeneratedColumn()
    TIPO_ID: number

    @Column({type: 'text'})
    TIPO: String

    @OneToMany(() => USUARIO, USUARIO => USUARIO.ID_TIPO_USUARIO, {nullable: false})
    @JoinColumn({name: "ID_TIPO_USUARIO"})
    USUARIO: USUARIO



}