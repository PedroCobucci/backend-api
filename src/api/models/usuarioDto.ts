import { USUARIO } from "../entities/usuarios"

export class UserDTOs {


    ID_USUARIO: number


    CPF: string


    NOME: string
    

    DATA_NASCIMENTO: Date

    TELEFONE: string

    EMAIL: string

    ATIVO: boolean


    ID_TIPO_USUARIO: number

  constructor(cpf: string, id_usuario: number, nome: string, data_nasc: Date, telefone: string, email: string, ativo: boolean){
    this.ID_USUARIO = id_usuario,
    this.CPF = cpf,
    this.NOME = nome,
    this.DATA_NASCIMENTO = data_nasc,
    this.TELEFONE = telefone,
    this.EMAIL = email,
    this.ATIVO = ativo
  }

}
