import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { log } from 'console';
import { FieldService } from 'src/field/field.service';
import { CareerService } from 'src/career/career.service';


@Controller('job')
export class JobController {
  constructor(
    private readonly jobService: JobService,
    private readonly fieldService: FieldService,
    private readonly careerService: CareerService,
    
    ) {}

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
  @Get('getByField')
  async getByField(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    @Query('field') field: string
    ) {
    try{
      const job = await this.jobService.getByField(page, limit, sortBy, sortOrder,field);
      
      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByCareer')
  async getByCareer(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    @Query('career') career: string
    ) {
    try{
      const job = await this.jobService.getByCareer(page, limit, sortBy, sortOrder, career);
      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByPriority')
  async getByPriority(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    @Query('priority') priority: number
    ) {
    try{
      const job = await this.jobService.getByPriority(page, limit, sortBy, sortOrder,priority);
      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByHotJob')
  async getByHotJob(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    ) {
    try{
      const job = await this.jobService.getByHotJob(page, limit, sortBy, sortOrder);
      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getById')
  async getById(@Query('id') id: string) {
    try{
      const job = await this.jobService.getById(id);
      return job
    }
    catch(err){
      throw err
    }
  };

  
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
