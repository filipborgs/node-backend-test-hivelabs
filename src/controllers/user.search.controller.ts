import Controller from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { UserRepository } from '../repository/user.repository'

export class UserSearchController implements Controller {
  public async handle ({ query: { search } }: HttpRequest): Promise<HttpResponse> {
    const repository = new UserRepository()
    const arr = await repository.all(search || '')
    return {
      statusCode: 200,
      body: arr
    }
  }
}
