import { HttpException, Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { log } from 'console';
import { Job } from 'src/job/entities/job.entity';
import { ServicePackage } from 'src/service-package/entities/service-package.entity';
import { Voucher } from 'src/voucher/entities/voucher.entity';
import { Recruiter } from 'src/recruiter/entities/recruiter.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectModel(Bill.name) private BillModel: Model<Bill>,
    @InjectModel('Job') private JobModel: Model<Job>,
    @InjectModel('ServicePackage') private ServicePackageModel: Model<ServicePackage>,
    @InjectModel('Voucher') private VoucherModel: Model<Voucher>,
    @InjectModel('Recruiter') private RecruiterModel: Model<Recruiter>
  ){}
  async create(createBillDto: CreateBillDto) {
    try{
      const newBill = new this.BillModel(createBillDto);
      return newBill.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }


  async getByMonth(month: number, year: number,recruiter: string){
    try{
      let realMonth = parseInt(month.toString()) - 1;
      return await this.BillModel.find({
        DatePayment: {
          $gte: new Date(year, realMonth , 1),
          $lt: new Date(year, month, 1)
        },
        Recruiter: recruiter
      })
      .populate('Job', 'Name').exec();
    }
    catch(error){
      return []
    }
  }

  async getByYear(year: number,recruiter: string){
    try{
      let nextYear = parseInt(year.toString()) + 1;
      return await this.BillModel.find({
        DatePayment: {
          $gte: new Date(year, 0, 1),
          $lt: new Date(nextYear, 0, 1)
        },
        Recruiter: recruiter
      })
      .populate('Job', 'Name').exec();;
    }
    catch(error){
      return []
    }
  }

  async getByDate(date: Date, recruiter: string){
    try{
      log(date)
      return await this.BillModel.find({
        DatePayment: date,
        Recruiter: recruiter
      })
      .populate('Job', 'Name').exec();;
    }
    catch(error){
      return []
    }
  }


}


