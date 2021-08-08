import express from 'express'
import db from './db'
import routes from './routes'

db()
const app = express()
const port = 8000
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`)
})
