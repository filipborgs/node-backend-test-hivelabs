import { Schema } from 'mongoose'
import { User } from '../model/user'

export default new Schema<User>({
  name: {
    type: String, required: true
  },
  lastname: {
    type: String
    // required: true
  },
  nickname: {
    type: String
    // required: true
  },
  address: {
    type: String
    // required: true
  },
  bio: {
    type: String
    // required: true
  },
  createdAt: {
    type: String
    // required: true
  },
  updatedAt: {
    type: String
    // required: true
  }
})
