import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post('create')
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    try{
      const newCandidate = await this.candidateService.create(createCandidateDto)
      return newCandidate;
    }
    catch(error){
      throw error;
    }
  }

  @Get('getAll')
  async findAll() {
    return this.candidateService.findAll();
  }

  @Get('getByUser')
  async findByUser(@Query('user') user:string){
    try{
      const candidate = await this.candidateService.findByUser(user);
      return candidate;
    }
    catch(error){
      throw error;
    }
  }


}
