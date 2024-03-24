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

    const fields = await this.FieldModel.find().find().exec();
    return fields
  }


}
