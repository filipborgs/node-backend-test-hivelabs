import { model } from 'mongoose'
import UserDao from '../dao/user.dao'
import { NotFoudError } from '../exceptions/errors'
import { User } from '../model/user'

export class UserRepository {
  public async save (userData: User): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    userData.updatedAt = new Date()
    userData.createdAt = new Date()
    const user = new UserModel(userData)
    await user.save()
    return user
  }

  public async all (search: string): Promise<User[]> {
    const UserModel = model<User>('User', UserDao, 'users')
    const orConfig = { $regex: search , $options: 'i' }
    return await UserModel.find({
      $or: [
        { name: orConfig },
        { nickname: orConfig }
      ]
    }).exec()
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

  public async updateNickname (newNick: string, id: string): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    const user = await UserModel.findById(id)
    user.nickname = newNick
    user.updatedAt = new Date()
    return await user.save()
  }

  public async update (userData: User, id: string): Promise<User> {
    const UserModel = model<User>('User', UserDao)
    const user = await UserModel.findById(id)
    user.lastname = userData.lastname || user.lastname
    user.address = userData.address || user.address
    user.updatedAt = new Date()
    return await user.save()
  }
}
