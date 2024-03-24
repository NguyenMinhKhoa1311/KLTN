import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
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
    @Query('page') page: number,
    @Query('limit') limit: number,
  ){
    try{
      const fields =  await this.fieldService.getAllWithLimit(page, limit);
      return fields;
    }
    catch(err){
      throw err;
    }
  }

  @Put('increase')
  async increase(@Body() id: string){
    try{
      const field = await this.fieldService.increase(id);
      return field;
    }
    catch(err){
      throw err;
    }
  }

  @Put('decrease')
  async decrease(@Body() id: string){
    try{
      const field = await this.fieldService.decrease(id);
      return field;
    }
    catch(err){
      throw err;
    }
  }


}
