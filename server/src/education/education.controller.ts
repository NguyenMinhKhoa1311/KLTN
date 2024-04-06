import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post('create')
  async create(@Body() createEducationDto: CreateEducationDto) {
    try{
      const newEducation = await this.educationService.create(createEducationDto);
      console.log(newEducation);
      
      if(newEducation._id!="500"){
        return newEducation;
      }
      else return{
        _id: "500",
    }
    }
    catch(err){
      return{
        _id: "500",
    }
    }
  }

  @Delete('delete')
  async delete(@Param('id') id: string){
    try{
      const deleted = await this.educationService.delete(id);
      if(deleted){
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
