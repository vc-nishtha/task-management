import { Injectable } from '@nestjs/common';
import { User } from './user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  create(user: User) {
    const createUser = new this.userModel(user);
    return createUser.save();
  }

  getList() {
    return this.userModel.find().exec();
  }

  getById(id: string) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  update(id: string) {
    return this.userModel.findByIdAndUpdate(id).exec();
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
