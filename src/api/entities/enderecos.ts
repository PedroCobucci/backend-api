import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { USUARIO } from './usuarios'

@Entity('ENDERECOS')
export class ENDERECO{

    @PrimaryGeneratedColumn()
    ID_ENDERECO: number

    @ManyToOne(() => USUARIO, USUARIO => USUARIO.ID_USUARIO, {nullable: false, onDelete: "CASCADE"})
    @JoinColumn({name: 'ID_USUARIO'})
    ID_USUARIO: USUARIO

    @Column({type: 'varchar', length: 60})
    RUA: string
    
    @Column({type: 'varchar', length: 60})
    BAIRRO: string
    
    @Column({type: 'varchar', length: 60})
    CIDADE: string

    @Column({type: 'varchar', length: 45, nullable: true})
    COMPLEMENTO: string

    @Column({type: 'varchar', length: 9})
    CEP: string

    @Column({type: 'int'})
    NUMERO: Number

}