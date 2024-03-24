import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

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
  @Put('increase')
  async increase(@Body() id: string){
    try{
      const career = await this.careerService.increase(id);
      return career;
    }
    catch(err){
      throw err;
    }
  }

  @Put('decrease')
  async decrease(@Body() id: string){
    try{
      const career = await this.careerService.decrease(id);
      return career;
    }
    catch(err){
      throw err;
    }
  }


}
