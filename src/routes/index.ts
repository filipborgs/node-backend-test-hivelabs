import { Router } from 'express'
const routerApi = Router()

routerApi.get('/', (_, res) => res.status(200).send('Node backend challenge'))

export default routerApi
