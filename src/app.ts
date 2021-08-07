import express from 'express'
const app = express()
const port = 8000

app.get('/', (_, res) => res.status(200).send('Node backend challenge'))

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`)
})
