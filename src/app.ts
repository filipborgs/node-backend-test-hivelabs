import { config } from 'dotenv'
import express from 'express'
import db from './db'
import routes from './routes'

config()
// eslint-disable-next-line @typescript-eslint/no-floating-promises
db()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

const port = 8000
app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`)
})
