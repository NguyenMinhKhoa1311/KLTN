import { HttpException, Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { Voucher } from './entities/voucher.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class VoucherService {

  constructor(
    @InjectModel(Voucher.name) private  VoucherModel: Model<Voucher>
  )
  {}

  
  async create(createVoucherDto: CreateVoucherDto) {
    try{
      const newVoucher = new this.VoucherModel(createVoucherDto);
      return await newVoucher.save();
    }
    catch(err){
      throw new HttpException(err.message, err.status);
    }

  }

  findAll() {
    return `This action returns all voucher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voucher`;
  }

  update(id: number, updateVoucherDto: UpdateVoucherDto) {
    return `This action updates a #${id} voucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}
