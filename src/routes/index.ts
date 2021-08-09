import { Router } from 'express'
import { adaptRoute } from '../adapters/express.route.adapter'
import UserFindController from '../controllers/user.find.controller'
import { UserRegistrationController } from '../controllers/user.registration.controller'
import { UserSearchController } from '../controllers/user.search.controller'
import userValidator from '../validator/user.validator'
const routerApi = Router()

routerApi.get('/', (_, res) => res.status(200).send('Node backend challenge'))
routerApi.get('/users', adaptRoute(new UserSearchController()))
routerApi.post('/users', userValidator.store, adaptRoute(new UserRegistrationController()))
routerApi.get('/users/:nickname', adaptRoute(new UserFindController()))

export default routerApi
