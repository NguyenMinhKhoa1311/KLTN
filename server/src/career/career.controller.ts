import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { FieldService } from 'src/field/field.service';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService, readonly fieldService: FieldService) {}

  @Post('create')
  async reate(@Body() createCareerDto: CreateCareerDto) {
    try{
      const newCareer = await this.careerService.create(createCareerDto)
      return newCareer;
    }
    catch(err){
      throw err;
    }
  }

  @Get('getAll')
  async getAll(){
    try{
      const careers = await this.careerService.getAll();
      return careers;
    }
    catch(err){
      throw err;
    }
  }

  @Put('increase')
  async increase(@Body() id: string){
    try{
      const career = await this.careerService.increaseQuantity(id);
      return career;
    }
    catch(err){
      throw err;
    }
  }

  @Put('decrease')
  async decrease(@Body() id: string){
    try{
      const career = await this.careerService.decreaseQuantity(id);
      return career;
    }
    catch(err){
      throw err;
    }
  }

  @Get('getByFieldName')
  async getByFieldName(@Query('name') fieldName: string){
    try{
      const field = await this.fieldService.getByFieldName(fieldName);
      const careers = await this.careerService.getByField(field._id.toString());
      return careers;
    }
    catch(err){
      throw err;
    }
  }


}
