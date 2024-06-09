import { HttpException, Injectable } from '@nestjs/common';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recruiter } from './entities/recruiter.entity';
import { Model, ObjectId } from 'mongoose';
import { Company } from 'src/company/entities/company.entity';
import { Voucher } from 'src/voucher/entities/voucher.entity';
import { User } from 'src/user/entities/user.entity';
import { log } from 'console';

@Injectable()
export class RecruiterService {
  
  constructor(
    @InjectModel(Recruiter.name) private RecruiterModel: Model<Recruiter>,
    @InjectModel(Company.name) private CompanyModel: Model<Company>,
    @InjectModel(Voucher.name) private VoucherModel: Model<Voucher>,
    @InjectModel(User.name) private UserModel: Model<User>
  ){}
  
  async create(createRecruiterDto: CreateRecruiterDto) {
    try{
      const recruiter = new this.RecruiterModel(createRecruiterDto);
      const newRecruiter =  await recruiter.save(); 
      return newRecruiter
    }
    catch(error){
      return{
        _id: "500"
      }
    }
  }

  async getBy_id(id: string){
    try{
      return await this.RecruiterModel.findById(id)
      .populate('Company','CompanyId Name', this.CompanyModel)
      .populate('User','Uid Username Password', this.UserModel)
      .populate('Voucher','VoucherId Name', this.VoucherModel)
      .exec();
    }
    catch(error){
      return{
        _id: "500",
        error: error
      }
    }
  }

  async findAll() {
    try{
      return await this.RecruiterModel.find()
      .populate('Company','CompanyId Name', this.CompanyModel)
      .populate('User','Uid Username Password', this.UserModel)
      .populate('Voucher','VoucherId Name', this.VoucherModel)
      .exec();
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }

  }

  async getByUser(user:string){
    try{
      const recruiter = await this.RecruiterModel.findOne({User: user})
      .populate('Company','CompanyId Name', this.CompanyModel)
      .populate('User','Uid Username Password', this.UserModel)
      .populate('Voucher','VoucherId Name', this.VoucherModel)
      .exec();
      if(recruiter._id.toString().length >0){
        return recruiter;
      }else{
        return{
          _id: "500"
        }
      }
    }catch(error){
      return{
        _id: "500",
        err:error
      }
    }
  }

  async updateVoucher(id: string, voucher: ObjectId) {
    try {
      const recruiter = await this.RecruiterModel.findById(id);
      recruiter.Voucher.push(voucher);
      return recruiter.save();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  async unBanRecruiter(id: string){
    try {
      const recruiterUnBanned = await this.RecruiterModel.findByIdAndUpdate(id,{isBan: false},{new: true}).exec();
      if(recruiterUnBanned._id.toString().length > 0){
        return true;
      }else{
        return false;
      }
    } catch (error) {
      log(error);
      return false;
    }
  }

  async banRecruiter(id: string){
    try {
      const recruiterBanned = await this.RecruiterModel.findByIdAndUpdate(id,{isBan: true},{new: true}).exec();
      if(recruiterBanned._id.toString().length > 0){
        return true;
      }else{
        return false;
      }
    } catch (error) {
      log(error);
      return false;
    }
  }
}
