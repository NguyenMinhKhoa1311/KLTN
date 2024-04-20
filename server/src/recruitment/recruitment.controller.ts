import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { log } from 'console';
import { JobService } from '../job/job.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(
    private readonly recruitmentService: RecruitmentService,
    private readonly jobService: JobService,

  ) {}

  @Post('create')
  async create(@Body() createRecruitmentDto: CreateRecruitmentDto) {
    try{
      const recruitment = await this.recruitmentService.create(createRecruitmentDto);
      return recruitment
    }
    catch(err){
      throw err
    }
  }

  @Get('getByJob')
  async getByJob(
    @Query('job') job: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    try{
      const recruitment = await this.recruitmentService.findByJob(job, page, limit, sortBy, sortOrder);
      return recruitment
    }
    catch(err){
      log(err)
      return []
    }
  }
  @Get('getByCandidate')
  async getByCandidate(
    @Query('candidate') candidate: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    try{
      const recruitment = await this.recruitmentService.findByCandidate(candidate, page, limit, sortBy, sortOrder);
      return recruitment
    }
    catch(err){
      log(err)
      return []
    }
  }

  @Get('getByRecruiter')
  async getByRecruiter(
    @Query('recruiter') recruiter: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    try{
      const recruitment = await this.recruitmentService.findByRecruiter(recruiter, page, limit, sortBy, sortOrder);
      return recruitment
    }
    catch(err){
      log(err)
      return []
    }
  }

  @Put('updateStatusSeen')
  async updateStatusSeen(
    @Query('id') id: string,
    @Query('status') status: boolean
  ) {
    try{

      const recruitment = await this.recruitmentService.updateStatusSeen(status,id);
      if(recruitment._id.toString().length>0) {
        return true;
      }else{
        return false;
      
      }
    }
    catch(err){
      log(err)
      return false
    }
  }

  @Put('updateStatus')
  async updateStatus(
    @Query('id') id: string,
    @Query('status') status: boolean
  ) {
    try{
      const recruitment = await this.recruitmentService.updateStatus(status,id);
      if(recruitment._id.toString().length>0) {
        return true;
      }else{
        return false;
      
      }
    }
    catch(err){
      log(err)
      return false
    }
  }

  @Delete('delete')
  async delete(
    @Query('id') id: string,
    @Query('job') jobId: string
  ) {
    try{
      const job = await this.jobService.deleteRecruitment(id,jobId);
      log(job)
      if(job._id.toString().length>0) {
        const recruitment = await this.recruitmentService.delete(id);
        if(recruitment._id.toString().length>0) {
          return true;
        }else{
          return false;
        }
      } 
      else return false;
    }
    catch(err){
      log(err)
      return false
    }
  }
}
