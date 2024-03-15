import { HttpException, Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Career } from './entities/career.entity';
import { Model } from 'mongoose';

@Injectable()
export class CareerService {

  constructor(
    @InjectModel(Career.name) private careerModel: Model<Career>
  ){}
  async create(createCareerDto: CreateCareerDto) {
    try{
      const newCareer = await new this.careerModel(createCareerDto);
      return newCareer.save();
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

  findAll() {
    return `This action returns all career`;
  }

  findOne(id: number) {
    return `This action returns a #${id} career`;
  }

  update(id: number, updateCareerDto: UpdateCareerDto) {
    return `This action updates a #${id} career`;
  }

  remove(id: number) {
    return `This action removes a #${id} career`;
  }
}
