import express from 'express'
import { AppDataSource } from './config/data-source'
import routes from './routes'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    // app.get('/', (req, res) => {
    //     return res.json('tudo certo')
    // })

    app.use(routes)

    return app.listen(process.env.PORT)
})