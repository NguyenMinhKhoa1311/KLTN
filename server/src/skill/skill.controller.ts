import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post('create')
  async create(@Body() createSkillDto: CreateSkillDto) {
    try{
      const newSkill = await this.skillService.create(createSkillDto);
      return newSkill;
    }
    catch(err){
      return err;
    }
  }

  @Get('getAll')
  async getAll() {
    const allSkill = await this.skillService.getAll();
    return allSkill;
  }
}
