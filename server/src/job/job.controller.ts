import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';


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
  @Put('updateStatusPayment')
  async updateStatusPayment(@Query('id') id: string, @Body() status: boolean) {
    try{
      const job = await this.jobService.updateStatusPayment(id, status);
      return job
    }
    catch(err){
      throw err
    }
  }


}
