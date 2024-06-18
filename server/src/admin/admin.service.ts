import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './entities/admin.entity';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    try{
      const admin = new this.adminModel(createAdminDto);
      const newAdmin = await admin.save();
      if(newAdmin._id){
        return newAdmin;
      }else{
        return {
          _id: "500",
          error: "error"
        };
      }
    }catch(err){
      return {
        _id: "500",
        error: err
      };
    }
  }

  async findAll() {
    try{
      return await this.adminModel.find()
      .populate('User', 'Uid Username Password', this.userModel)
      .exec();
    }catch(err){
      return []
    }
  }
  
  async findByUser(User: string) {
    try{
      const admin = await this.adminModel.findOne({User: User})
      .populate('User', 'Uid Username Password', this.userModel)
      .exec();
      if(admin._id){
        return admin;
      }else{
        return {
          _id: "500",
          error: "admin not found"
        };
      }
    }catch(err){
      return {
        _id: "500",
        error: err
      };
    }
  }
  async findBy_id(_id: string) {
    try{
      const admin = await this.adminModel.findById(_id)
      .populate('User', 'Uid Username Password', this.userModel)
      .exec();
      if(admin._id){
        return admin;
      }else{
        return {
          _id: "500",
          error: "admin not found"
        };
      }
    }catch(err){
      return {
        _id: "500",
        error: err
      };
    }
  }


}
