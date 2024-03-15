import { HttpException, Injectable } from '@nestjs/common';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recruiter } from './entities/recruiter.entity';
import { Model, ObjectId } from 'mongoose';
import { Company } from 'src/company/entities/company.entity';
import { Voucher } from 'src/voucher/entities/voucher.entity';
import { User } from 'src/user/entities/user.entity';

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
      const newRecruiter = new this.RecruiterModel(createRecruiterDto);
      return newRecruiter.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
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

  findOne(id: number) {
    return `This action returns a #${id} recruiter`;
  }

  update(id: number, updateRecruiterDto: UpdateRecruiterDto) {
    return `This action updates a #${id} recruiter`;
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

  remove(id: number) {
    return `This action removes a #${id} recruiter`;
  }
}
