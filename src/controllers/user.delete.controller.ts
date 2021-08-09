import { MissingParamError } from '../exceptions/errors'
import { badRequest, noContent, notFound } from '../helpers/http-helpers'
import Controller from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { UserRepository } from '../repository/user.repository'

export default class UserDeleteController implements Controller {
  public async handle ({ params: { id } }: HttpRequest): Promise<HttpResponse> {
    if (!id) {
      return badRequest(new MissingParamError('id'))
    }
    const repository = new UserRepository()
    try {
      await repository.delete(id)
      return noContent()
    } catch (error) {
      return notFound(error)
    }
  }
}
