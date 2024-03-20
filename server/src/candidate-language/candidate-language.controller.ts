import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidateLanguageService } from './candidate-language.service';
import { CreateCandidateLanguageDto } from './dto/create-candidate-language.dto';
import { UpdateCandidateLanguageDto } from './dto/update-candidate-language.dto';

@Controller('candidate-language')
export class CandidateLanguageController {
  constructor(private readonly candidateLanguageService: CandidateLanguageService) {}

  @Post('create')
  async create(@Body() createCandidateLanguageDto: CreateCandidateLanguageDto) {
    try{
      const newCandidateLanguage = await this.candidateLanguageService.create(createCandidateLanguageDto);
      return newCandidateLanguage;
    }
    catch(err){
      return err;
    }
  }

  @Get()
  findAll() {
    return this.candidateLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateLanguageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateLanguageDto: UpdateCandidateLanguageDto) {
    return this.candidateLanguageService.update(+id, updateCandidateLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateLanguageService.remove(+id);
  }
}
