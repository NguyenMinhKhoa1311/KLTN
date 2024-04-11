import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post("create")
  async create(@Body() createSkillDto: CreateSkillDto) {
    try{
       const skill = await this.skillService.create(createSkillDto);
       if(skill._id.toString().length > 0){
         return skill;
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




}
