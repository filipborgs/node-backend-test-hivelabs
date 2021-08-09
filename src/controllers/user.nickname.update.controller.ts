import { FieldTakenError } from '../exceptions/errors'
import { conflict, ok, serverErro } from '../helpers/http-helpers'
import Controller from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { UserRepository } from '../repository/user.repository'

export class UserNicknameUpdateController implements Controller {
  public async handle ({ params: { id }, body: { newNickname } }: HttpRequest): Promise<HttpResponse> {
    const { updateNickname, findByNickname } = new UserRepository()

    if (await findByNickname(newNickname)) {
      return conflict(new FieldTakenError('nickname'))
    }

    try {
      const user = await updateNickname(newNickname, id)
      return ok(user)
    } catch (e) {
      return serverErro(e)
    }
  }
}
