import { NotFoudError } from '../exceptions/errors'
import { notFound, ok } from '../helpers/http-helpers'
import Controller from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { UserRepository } from '../repository/user.repository'

export default class UserFindController implements Controller {
  public async handle ({ params: { nickname } }: HttpRequest): Promise<HttpResponse> {
    const repository = new UserRepository()
    const user = await repository.findByNickname(nickname)
    return user ? ok(user) : notFound(new NotFoudError('Usuario'))
  }
}
