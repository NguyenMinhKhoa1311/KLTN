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

  async getAll(){
    try{
      return await this.careerModel.find()
      .populate('Field', 'FieldId FieldName')
      .exec();
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

  async increase(id: string){
    try{
      const career = await this.careerModel.findByIdAndUpdate(
        id,
        {$inc:{Quantity:1}},
        {new: true}
      )
      return career

    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

  async decrease(id: string){
    try{
      const updateCareer = await this.careerModel.findById(id).exec();
      if(updateCareer.Quantity === 0){
        throw new HttpException('Quantity is 0', 400)
      }
      else{
        const career = await this.careerModel.findByIdAndUpdate(
          id,
          {$inc:{Quantity:-1}},
          {new: true}
        )
        return career
      }

    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

}
