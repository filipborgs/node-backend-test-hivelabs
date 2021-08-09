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
}
