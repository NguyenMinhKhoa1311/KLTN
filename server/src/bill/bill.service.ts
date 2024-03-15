import { HttpException, Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BillService {
  constructor(
    @InjectModel(Bill.name) private BillModel: Model<Bill>
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

  findAll() {
    return `This action returns all bill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bill`;
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  remove(id: number) {
    return `This action removes a #${id} bill`;
  }
}
