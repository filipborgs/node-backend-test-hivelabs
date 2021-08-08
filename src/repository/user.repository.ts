import { model } from 'mongoose'
import UserDao from '../dao/user.dao'
import { User } from '../model/user'

export class UserRepository {
  public async save (userData: User): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    const user = new UserModel(userData)
    await user.save()
    return user
  }
}
