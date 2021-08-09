import { ok, serverErro } from '../helpers/http-helpers'
import Controller from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { UserRepository } from '../repository/user.repository'

export class UserUpdateController implements Controller {
  public async handle ({ params: { id }, body }: HttpRequest): Promise<HttpResponse> {
    const { update } = new UserRepository()

    try {
      const user = await update(body, id)
      return ok(user)
    } catch (e) {
      return serverErro(e)
    }
  }
}
