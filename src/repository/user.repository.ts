import { model } from 'mongoose'
import UserDao from '../dao/user.dao'
import { NotFoudError } from '../exceptions/errors'
import { User } from '../model/user'

export class UserRepository {
  public async save (userData: User): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    const user = new UserModel(userData)
    await user.save()
    return user
  }

  public async all (search: string): Promise<User[]> {
    const UserModel = model<User>('User', UserDao)
    const orConfig = { $regex: search , $options: 'i' }
    const rs = UserModel.find({
      $or: [
        {
          name: orConfig,
          lastname: orConfig
        }
      ]
    })
    return rs
  }

  public async findByNickname (nickname: string): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    return UserModel.findOne({ nickname }, 'name lastname nickname').exec()
  }

  public async delete (id: string): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    const user = await UserModel.findById(id)
    if (!user) { throw new NotFoudError('Usuario') }
    return await user.delete()
  }
}
