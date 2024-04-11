import { Injectable } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Reference } from './entities/reference.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReferencesService {
  constructor(
    @InjectModel(Reference.name) private referenceModel: Model<Reference>
  ){}
  async create(createReferenceDto: CreateReferenceDto) {
    try{
       const reference = await new this.referenceModel(createReferenceDto).save();
       if(reference._id.toString().length > 0){
         return reference;
       }
       else{
         return {
           _id: "500",
         };
       }
    }
    catch(err){
      return {
        _id: "500",
        err: err
      }
    }
  }
  async update(updateReferenceDto: any) {
    try{
       const reference = await this.referenceModel.findByIdAndUpdate(updateReferenceDto._id, updateReferenceDto,{new:true})
       if(reference._id.toString().length > 0){
         return reference;
       }
       else{
         return {
           _id: "500",
         };
       }
      }
      catch(err){
        return {
          _id: "500",
          err: err
        }
      }
  }
  async delete(id: string){
    try{
      const reference = await this.referenceModel.findByIdAndDelete(id);
      if(reference._id.toString().length > 0){
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


}
