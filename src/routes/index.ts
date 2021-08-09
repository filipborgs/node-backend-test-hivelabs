import { Router } from 'express'
import { adaptRoute } from '../adapters/express.route.adapter'
import UserDeleteController from '../controllers/user.delete.controller'
import UserFindController from '../controllers/user.find.controller'
import { UserNicknameUpdateController } from '../controllers/user.nickname.update.controller'
import { UserRegistrationController } from '../controllers/user.registration.controller'
import { UserSearchController } from '../controllers/user.search.controller'
import { UserUpdateController } from '../controllers/user.update.controller'
import userValidator from '../validator/user.validator'
const routerApi = Router()

routerApi.get('/', (_, res) => res.status(200).send('Node backend challenge'))
routerApi.get('/users', adaptRoute(new UserSearchController()))
routerApi.post('/users', userValidator.store, adaptRoute(new UserRegistrationController()))
routerApi.get('/users/:nickname', adaptRoute(new UserFindController()))
routerApi.delete('/users/:id', adaptRoute(new UserDeleteController()))
routerApi.patch('/users/:id', userValidator.updateNickname, adaptRoute(new UserNicknameUpdateController()))
routerApi.put('/users/:id', userValidator.update, adaptRoute(new UserUpdateController()))

export default routerApi
