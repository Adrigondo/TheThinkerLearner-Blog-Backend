import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserData: CreateUserInput): Promise<User> {
    const createdUser = new this.userModel(createUserData);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user= await this.userModel.findById(id).populate({
      path: 'posts',
      populate: {
        path: 'categories',
      },
    }).exec();
    if(!user){
      throw new NotFoundException();
    }
    return user;
  }

  async update(id: string, updateUserData: UpdateUserInput) {
    const updateUser = this.userModel.findByIdAndUpdate(id, updateUserData).exec();
    return updateUser;
  }

  async remove(id: string) {
    const removeUser = this.userModel.findByIdAndRemove({ _id: id }).exec();
    return removeUser;
  }
}
