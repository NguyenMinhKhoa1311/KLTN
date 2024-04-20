import { HttpException, Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Career } from './entities/career.entity';
import { Model } from 'mongoose';
import { log } from 'console';

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

  async increaseQuantity(id: string){
    try{
      const career = await this.careerModel.findByIdAndUpdate(
        id,
        {$inc:{Quantity:1}},
        {new: true}
      )
      if(career._id.toString().length > 0){
        return true;
      }
      else{
        return false;
      }
    }
    catch(err){
      return false;
    }
  }

  async decreaseQuantity(id: string){
    try{
      const updateCareer = await this.careerModel.findById(id).exec();
      if(updateCareer.Quantity === 0){
        return false;
      }
      else{
        const career = await this.careerModel.findByIdAndUpdate(
          id,
          {$inc:{Quantity:-1}},
          {new: true}
        )
        if(career._id.toString().length > 0){
          return true;
        }
        else{
          return false;
        }
      }
    }
    catch(err){
      return false
    }
  }


  async getByCareerName(careerName: string){
    try{
      const career = await this.careerModel.findOne({Name: careerName}).exec();
      if(career != null&&career != undefined){
      return career
      }
      else{
        return {_id:"65fa87893dcc1153af38b18a"}
      }
      }
    catch(err){
      return {_id:"65fa87893dcc1153af38b18a"}
    }
  }
  
  async getByField(id: string){
    try{
      const fields = await this.careerModel.find({Field: id}).exec();
      return fields
    }
    catch(err){
      return []
    }
  }

}
