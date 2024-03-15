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

  findAll() {
    return `This action returns all field`;
  }

  findOne(id: number) {
    return `This action returns a #${id} field`;
  }

  update(id: number, updateFieldDto: UpdateFieldDto) {
    return `This action updates a #${id} field`;
  }

  remove(id: number) {
    return `This action removes a #${id} field`;
  }
}
