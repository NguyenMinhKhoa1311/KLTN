import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';

@Controller('work-experience')
export class WorkExperienceController {
  constructor(private readonly workExperienceService: WorkExperienceService) {}

  @Post('create')
  async create(@Body() createWorkExperienceDto: CreateWorkExperienceDto) {
    try{
      const newWorkExperience = await this.workExperienceService.create(createWorkExperienceDto);
      if(newWorkExperience._id.toString()!="500"){
        return newWorkExperience;
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
  

}
