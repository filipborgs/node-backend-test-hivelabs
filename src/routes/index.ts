import { Router } from 'express'
import { adaptRoute } from '../adapters/express.route.adapter'
import { UserSearchController } from '../controllers/user.search.controller'
const routerApi = Router()

routerApi.get('/', (_, res) => res.status(200).send('Node backend challenge'))
routerApi.get('/users', adaptRoute(new UserSearchController()))

export default routerApi
