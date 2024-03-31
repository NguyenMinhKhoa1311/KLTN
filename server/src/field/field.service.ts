import { HttpException, Injectable } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Field } from './entities/field.entity';
import { Model } from 'mongoose';

@Injectable()
export class FieldService {
  
constructor(
  @InjectModel(Field.name) private FieldModel: Model<Field>
){}

  async create(createFieldDto: CreateFieldDto) {
    try{
      const newField = new this.FieldModel(createFieldDto);
      return newField.save();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async getAll(){
    try{
      return await this.FieldModel.find().exec();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async getAllWithLimit(
    page: number,
    limit: number,
  ){
    const skip = page * limit;
    const fields = await this.FieldModel
    .find()
    .skip(skip)
    .limit(limit)
    .exec();
    return fields
  }
  async increaseQuantity(id: string){
    try{
      const field = await this.FieldModel.findByIdAndUpdate(
        id,
        { $inc: { Quantity: 1 } },
        { new: true }
        );
      return field;
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }
  async decreaseQuantity(id: string){
    try{
      const updateField = await this.FieldModel.findById(id).exec();
      if(updateField.Quantity === 0){
        throw new HttpException('Quantity is 0',400);
      }
      else{
        const field = await this.FieldModel.findByIdAndUpdate(
          id,
          { $inc: { Quantity: -1 } },
          { new: true }
          );
        return field;
      }

  }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }


  async getByFieldName(name: string){
    try{
      const field = await this.FieldModel.findOne({FieldName: name}).exec();
      if(field != null && field != undefined){
        return field;
      }
      else{
        return {_id:"65fa87893dcc1153af38b18a"}
      }
    }
    catch(err){
      return {_id:"65fa87893dcc1153af38b18a"}
    }
  }


}
