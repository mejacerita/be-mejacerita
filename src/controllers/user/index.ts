import { Document, Model } from 'mongoose'

import UserModel from '@schemas/User'

class User {
  public model: Model<Document>

  constructor() {
    this.model = UserModel
  }
}

export default new User()
