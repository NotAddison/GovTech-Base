import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  // Constructor
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) {}

  // 1. Make Async, Specify Promise return type
  async create(createUserDto: CreateUserDto) : Promise<User> {
    console.log('createUserDto: ', createUserDto)
    return new this.userModel(createUserDto).save();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
