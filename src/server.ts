import 'express-async-errors'
import express, { Response, Request, NextFunction } from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)


app.use((err: Error, req: Request, res: Response, nxt: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server errror'
    })
})

app.listen(9090, () => console.log('server is running'))