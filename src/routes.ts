import { Router } from "express";
import { tipoUsuarioController } from "./api/controllers/tipoUsuarioController";
import { AuthMidle } from "./api/middlewares/authMidle";

const routes = Router()

/**
   * @openapi
   * '/cadastrarUsuario':
   *  post:
   *     tags:
   *     - Usuario
   *     summary: cadastrar usuario
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - cpf
   *               - nome
   *               - data_nascimento
   *               - telefone
   *               - email
   *               - tipo
   *               - rua
   *               - bairro
   *               - cep
   *               - cidade
   *               - numero
   *               - senha
   *               - username
   *              properties:
   *                cpf:
   *                  type: string
   *                  default: 111.111.111-34
   *                nome:
   *                  type: string
   *                  default: predo rodrigues
   *                data_nascimento:
   *                  type: Date
   *                  default: 01/01/23
   *                telefone:
   *                  type: string
   *                  default: 971458451
   *                email:
   *                  type: string
   *                  default: predin@hotmail.com
   *                tipo:
   *                  type: string
   *                  default: cliente
   *                rua:
   *                  type: string
   *                  default: elbert vilela
   *                bairro:
   *                  type: string
   *                  default: centro
   *                cep:
   *                  type: string
   *                  default: 35460-000
   *                cidade:
   *                  type: string
   *                  default: brumadin
   *                complemento:
   *                  type: string
   *                  default: apt 208
   *                numero:
   *                  type: string
   *                  default: 515
   *                senha:
   *                  type: string
   *                  default: 123456Anb
   *                username:
   *                  type: string
   *                  default: predinB
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */
//routes.post('/cadastrarUsuario', new UsuariosController().create)


/**
   * @openapi
   * '/atualizarUsuario':
   *  post:
   *     tags:
   *     - Usuario
   *     summary: atualizar usuario
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - cpf
   *               - nome
   *               - data_nascimento
   *               - telefone
   *               - email
   *               - tipo
   *               - rua
   *               - bairro
   *               - cep
   *               - cidade
   *               - numero
   *               - senha
   *               - username
   *              properties:
   *                cpf:
   *                  type: string
   *                  default: 111.111.111-34
   *                nome:
   *                  type: string
   *                  default: predo rodrigues
   *                data_nascimento:
   *                  type: Date
   *                  default: 01/01/23
   *                telefone:
   *                  type: string
   *                  default: 971458451
   *                email:
   *                  type: string
   *                  default: predin@hotmail.com
   *                tipo:
   *                  type: string
   *                  default: cliente
   *                rua:
   *                  type: string
   *                  default: elbert vilela
   *                bairro:
   *                  type: string
   *                  default: centro
   *                cep:
   *                  type: string
   *                  default: 35460-000
   *                cidade:
   *                  type: string
   *                  default: brumadin
   *                complemento:
   *                  type: string
   *                  default: apt 208
   *                numero:
   *                  type: string
   *                  default: 515
   *                senha:
   *                  type: string
   *                  default: 123456Anb
   *                username:
   *                  type: string
   *                  default: predinB
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */
//routes.post('/atualizarUsuario', new UsuariosController().update)
routes.post('/cadastrarTipo', new AuthMidle().checkToken ,new tipoUsuarioController().create)

/**
   * @openapi
   * '/listaUsuarios':
   *  get:
   *     tags:
   *     - Usuario
   *     summary: listar todos usuários
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.get('/listaUsuarios',  new UsuariosController().listAllUsers)

/**
   * @openapi
   * '/buscaUsuario':
   *  post:
   *     tags:
   *     - Usuario
   *     summary: listar um usuário
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - cpf
   *              properties:
   *                cpf:
   *                  type: string
   *                  default: 111.111.111-34
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/buscaUsuario',  new UsuariosController().getUser)

/**
   * @openapi
   * '/deletarUsuario':
   *  delete:
   *     tags:
   *     - Usuario
   *     summary: deleta usuário
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - cpf
   *              properties:
   *                cpf:
   *                  type: string
   *                  default: 111.111.111-34
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.delete('/deletarUsuario',  new UsuariosController().Delete)






/**
   * @openapi
   * '/cadastrarConsulta':
   *  post:
   *     tags:
   *     - Consultas
   *     summary: cadastrar consulta
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_medico
   *               - id_animal
   *               - data
   *               - status
   *              properties:
   *                id_medico:
   *                  type: number
   *                  default: 1
   *                id_animal:
   *                  type: number
   *                  default: 1
   *                data:
   *                  type: Date
   *                  default: 01/01/23
   *                status:
   *                  type: string
   *                  default: solicitado
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/cadastrarConsulta', new consultaController().create)

/**
   * @openapi
   * '/atualizarConsulta':
   *  post:
   *     tags:
   *     - Consultas
   *     summary: atualizar consulta
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_consulta
   *               - data
   *               - status
   *               - documentos
   *              properties:
   *                id_consulta:
   *                  type: number
   *                  default: 1
   *                data:
   *                  type: Date
   *                  default: 01/01/23
   *                status:
   *                  type: string
   *                  default: solicitado
   *                documentos:
   *                  type: string
   *                  default: http://linklegalparadownload.com
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/atualizarConsulta',  new consultaController().update)

/**
   * @openapi
   * '/deletarConsulta':
   *  delete:
   *     tags:
   *     - Consultas
   *     summary: deletar consulta
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_consulta
   *              properties:
   *                id_consulta:
   *                  type: number
   *                  default: 1
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.delete('/deletarConsulta',  new consultaController().delete)

/**
   * @openapi
   * '/listarConsultas':
   *  get:
   *     tags:
   *     - Consultas
   *     summary: listar consulta
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.get('/listarConsultas', new AuthMidle().checkToken ,new consultaController().listAll)

/**
   * @openapi
   * '/buscaConsulta':
   *  post:
   *     tags:
   *     - Consultas
   *     summary: busca consulta
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_consulta
   *              properties:
   *                id_consulta:
   *                  type: number
   *                  default: 1
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/buscaConsulta',  new consultaController().getConsulta)

/**
   * @openapi
   * '/cadastrarAvaliacao':
   *  post:
   *     tags:
   *     - Avaliação
   *     summary: cadastrar feedback
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_consulta
   *               - nota
   *              properties:
   *                id_consulta:
   *                  type: number
   *                  default: 1
   *                nota:
   *                  type: number
   *                  default: 8
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/cadastrarAvaliacao', new avaliacaoController().create)

/**
   * @openapi
   * '/avaliacoesDeMedico':
   *  post:
   *     tags:
   *     - Avaliação
   *     summary: listar avaliações de um medico
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - cpf
   *              properties:
   *                cpf:
   *                  type: string
   *                  default: 111.111.111-34
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/avaliacoesDeMedico', new avaliacaoController().getAllFeedbackFromMedico)


/**
   * @openapi
   * '/cadastrarAnimal':
   *  post:
   *     tags:
   *     - Animal
   *     summary: cadastrar Animal
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - nome
   *               - especie
   *               - cpf_tutor
   *              properties:
   *                nome:
   *                  type: string
   *                  default: Mel
   *                especie:
   *                  type: string
   *                  default: cachorro
   *                cpf_tutor:
   *                  type: string
   *                  default: 111.111.111-34
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/cadastrarAnimal', new AnimalController().create)

/**
   * @openapi
   * '/atualizarAnimal':
   *  post:
   *     tags:
   *     - Animal
   *     summary: Atualizar Animal
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - nome
   *               - especie
   *               - id_animal
   *              properties:
   *                nome:
   *                  type: string
   *                  default: Mel
   *                especie:
   *                  type: string
   *                  default: cachorro
   *                id_animal:
   *                  type: number
   *                  default: 1
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/atualizarAnimal', new AnimalController().update)

/**
   * @openapi
   * '/buscaAnimal':
   *  post:
   *     tags:
   *     - Animal
   *     summary: busca um Animal
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_animal
   *              properties:
   *                id_animal:
   *                  type: string
   *                  default: 1
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/buscaAnimal', new AnimalController().getAnimal)

/**
   * @openapi
   * '/deletarAnimal':
   *  delete:
   *     tags:
   *     - Animal
   *     summary: deletar um Animal
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - id_animal
   *              properties:
   *                id_animal:
   *                  type: number
   *                  default: 1
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.delete('/deletarAnimal', new AnimalController().delete)

/**
   * @openapi
   * '/listarAnimaisDeTutor':
   *  post:
   *     tags:
   *     - Animal
   *     summary: listar os animais de um usuário
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              required:
   *               - cpf_tutor
   *              properties:
   *                cpf_tutor:
   *                  type: string
   *                  default: 111.111.111-34
   *     responses:
   *      200:
   *        description: Success
   *      404:
   *        description: Usuário não encontrado, verifique o CPF
   *      500:
   *        description: Internal Server Error
   */

//routes.post('/listarAnimaisDeTutor', new AnimalController().getAllAnimalsFromUser)






export default routes