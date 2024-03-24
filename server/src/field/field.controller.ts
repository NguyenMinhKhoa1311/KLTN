import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FieldService } from './field.service';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';

@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post('create')
  async create(@Body() createFieldDto: CreateFieldDto) {
    try{
      const newField = await this.fieldService.create(createFieldDto)
      return newField;
    }
    catch(err){
      throw err;
    }
  }
  @Get('getAll')
  async findAllAndSort(
  ){
    try{
      const fields =  await this.fieldService.getAll();
      return fields;
    }
    catch(err){
      throw err;
    }
  }


}
