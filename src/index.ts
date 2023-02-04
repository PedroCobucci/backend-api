import express from 'express'
import { AppDataSource } from './config/data-source'
import routes from './routes'
import listarConsultas from './api/routes/consultas/listarConsultas'
import swaggerDocs from './config/swagger'
import cadastrarUsuario from './api/routes/usuarios/cadastrarUsuario'
import atualizarUsuario from './api/routes/usuarios/atualizarUsuario'
import listaUsuarios from './api/routes/usuarios/listaUsuarios'
import buscaUsuarios from './api/routes/usuarios/buscaUsuario'
import deletarUsuarios from './api/routes/usuarios/deletarUsuario'
import cadastrarConsulta from './api/routes/consultas/cadastrarConsulta'
import atualizarConsulta from './api/routes/consultas/atualizarConsulta'
import deletarConsulta from './api/routes/consultas/deletarConsulta'
import buscaConsulta from './api/routes/consultas/buscaConsulta'
import cadastrarAvaliacao from './api/routes/avaliacoes/cadastrarAvaliacao'
import avaliacoesDeMedico from './api/routes/avaliacoes/avaliacoesDeMedico'
import cadastrarAnimal from './api/routes/animais/cadastrarAnimal'
import atualizarAnimal from './api/routes/animais/atualizarAnimal'
import buscaAnimal from './api/routes/animais/buscaAnimal'
import deletarAnimal from './api/routes/animais/deletarAnimal'
import listarAnimaisDeTutor from './api/routes/animais/listaAnimaisDeTutor'
import auth from './api/routes/auth/logar'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(auth)

    app.use(routes)
    app.use(cadastrarUsuario)
    app.use(atualizarUsuario)
    app.use(listaUsuarios)
    app.use(buscaUsuarios)
    app.use(deletarUsuarios)

    app.use(cadastrarConsulta)
    app.use(atualizarConsulta)
    app.use(deletarConsulta)
    app.use(listarConsultas)
    app.use(buscaConsulta)

    app.use(cadastrarAvaliacao)
    app.use(avaliacoesDeMedico)

    app.use(cadastrarAnimal)
    app.use(atualizarAnimal)
    app.use(buscaAnimal)
    app.use(deletarAnimal)
    app.use(listarAnimaisDeTutor)


    return app.listen(process.env.PORT, async () => {
        swaggerDocs(app, Number(process.env.PORT))
    })
})