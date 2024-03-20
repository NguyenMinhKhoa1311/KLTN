import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { log } from 'console';


@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('create')
  async create(@Body() createJobDto: CreateJobDto) {
    try{
      const job = await this.jobService.create(createJobDto);
      return job
    }
    catch(err){
      throw err
    }
  }
  @Get('getAll')
  async getAll() {
    try{
      const job = await this.jobService.getAll();
      return job
    }
    catch(err){
      throw err
    }
  }
  @Get('getAllAndSort')
  async getAllAndSort(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    try{
      const job = await this.jobService.getAllAndSort(page, limit, sortBy, sortOrder);
      return job
    }
    catch(err){
      throw err
    }
  }

  
  @Put('updateStatusPayment')
  async updateStatusPayment(@Query('id') id: string, @Body() status: any) {
    try{
      const job = await this.jobService.updateStatusPayment(id, status.status);
      return job
    }
    catch(err){
      throw err
    }
  }
  @Put('updateStatusRecruitment')
  async updateStatusRecruitment(@Query('id') id: string, @Query('status') status: boolean) {
    try{
      const job = await this.jobService.updateStatusRecruitment(id, status);
      return job
    }
    catch(err){
      throw err
    }
  }


}