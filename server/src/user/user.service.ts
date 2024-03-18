import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

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
