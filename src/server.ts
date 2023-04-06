import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)

app.listen(9090, () => console.log('server is running'))