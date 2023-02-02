import express from 'express'
import { AppDataSource } from './config/data-source'
import routes from './routes'
import swaggerDocs from './config/swagger'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    // app.get('/', (req, res) => {
    //     return res.json('tudo certo')
    // })

    app.use(routes)



    return app.listen(process.env.PORT, async () => {
        swaggerDocs(app, Number(process.env.PORT))
    })
})