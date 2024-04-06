import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CandidateSkillService } from './candidate-skill.service';
import { CreateCandidateSkillDto } from './dto/create-candidate-skill.dto';
import { UpdateCandidateSkillDto } from './dto/update-candidate-skill.dto';

@Controller('candidate-skill')
export class CandidateSkillController {
  constructor(private readonly candidateSkillService: CandidateSkillService) {}

  @Post('create')
  async create(@Body() createCandidateSkillDto: CreateCandidateSkillDto) {
    try{
      const newCandidateSkill = await this.candidateSkillService.create(createCandidateSkillDto);
      if(newCandidateSkill._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      return newCandidateSkill;
    }
    catch(err){
      return {
        _id: "500",
      }
    }
  }
  @Delete('delete')
  async delete(@Query('id') id:string) {
    try{
      const candidateSkill = await this.candidateSkillService.delete(id);
      if(candidateSkill){
        return {
          _id: "200",
        }
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(err){
      return {
        _id: "500",
      }
    }
  }

}
