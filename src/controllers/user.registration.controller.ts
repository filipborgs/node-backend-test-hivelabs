import { FieldTakenError } from '../exceptions/errors'
import { conflict, created, serverErro } from '../helpers/http-helpers'
import Controller from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { UserRepository } from '../repository/user.repository'

export class UserRegistrationController implements Controller {
  public async handle (request: HttpRequest): Promise<HttpResponse> {
    const { save, findByNickname } = new UserRepository()

    if (await findByNickname(request.body.nickname)) {
      return conflict(new FieldTakenError('nickname'))
    }

    try {
      const user = await save(request.body)
      return created(user)
    } catch (e) {
      return serverErro(e)
    }
  }
}
