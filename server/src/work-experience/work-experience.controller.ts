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
      return newWorkExperience;
    }
    catch(err){
      return err;
    }
  }

  @Get()
  findAll() {
    return this.workExperienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workExperienceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkExperienceDto: UpdateWorkExperienceDto) {
    return this.workExperienceService.update(+id, updateWorkExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workExperienceService.remove(+id);
  }
}
