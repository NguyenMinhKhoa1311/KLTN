import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
      return newCandidateSkill;
    }
    catch(err){
      return err;
    }
  }

  @Get()
  findAll() {
    return this.candidateSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateSkillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateSkillDto: UpdateCandidateSkillDto) {
    return this.candidateSkillService.update(+id, updateCandidateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateSkillService.remove(+id);
  }
}
