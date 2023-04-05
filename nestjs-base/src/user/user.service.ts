import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

// NOTE: Should implement Error Handling, this is simplified for understanding

@Injectable()
export class UserService {

  // Constructor
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) {}

  // 1. Make Async, Specify Promise return type
  async create(createUserDto: CreateUserDto) : Promise<User> {
    console.log('createUserDto: ', createUserDto)
    return new this.userModel(createUserDto).save();
  }

  async findAll(){
    // Return all data
    return this.userModel.find();
  }

  async findOne(name: string) : Promise<User> {
    // Return one data
    console.log("findOne: ", name)
    return this.userModel.findOne({name: name});
  }

  async update(name: string, updateUserDto: UpdateUserDto){
    // Update data
    return this.userModel.updateOne({name: name}, {$set : updateUserDto});
  }

  async remove(name: string) {
    // Delete data
    return this.userModel.findOneAndRemove({name: name});
  }
}
