import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { log } from 'console';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private UserModel: Model<User>
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try{
      const createUser = new this.UserModel(createUserDto);
      return await createUser.save();
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll() {
    try{
      return await this.UserModel.find();
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async findByUserName(userName:string){
    try{
      const user = await this.UserModel.findOne({ Username: userName }).exec();

      
      if(!user){
        let errUser = {
          _id: "404 user not found",
          Username: "404 user not found",
          Password: "404 user not found",
          Uid: "404 user not found",
        }
        return errUser;
      }
      return user;
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByUserNameAndPassword(userName:string, password:string){
    try{
      const user = await this.UserModel.findOne({ Username: userName, Password: password }).exec();
      if(!user){
        let errUser = {
          _id: "404 user not found",
          Username: "404 user not found",
          Password: "404 user not found",
          Uid: "404 user not found",
        }
        return errUser;
      }
      return user;
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async updatePassword(userName:string, password:string){
    try{
      log(userName)
      const user = await this.UserModel.findOneAndUpdate({ Username: userName }, { Password: password }, { new: true }).exec();
      log(user)
      if(user._id){
        return user;
      }
      return {
        _id: "500",
        error: "User not found"
      }
    }catch(error){
      return{
        _id:"500",
        error: error.message
      }
    }
  }

}
