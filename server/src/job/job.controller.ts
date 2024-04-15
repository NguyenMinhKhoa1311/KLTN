import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { log } from 'console';
import { FieldService } from 'src/field/field.service';
import { CareerService } from 'src/career/career.service';
import { CompanyService } from 'src/company/company.service';


@Controller('job')
export class JobController {
  constructor(
    private readonly jobService: JobService,
    private readonly fieldService: FieldService,
    private readonly careerService: CareerService,
    private readonly companyService: CompanyService
    
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
      if(job._id.toString().length>0){
      return job
      }
      else return{
        _id: "500",
      }
    }
    catch(err){
      return{
        _id: "500",
      }
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

  @Get('getByFieldName')
  async getByFieldName(
    @Query('fieldName') fieldName: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const field = await this.fieldService.getByFieldName(fieldName)
      log(field)
      const job = await this.jobService.getByField(page, limit, sortBy, sortOrder,  field._id.toString())

      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByCareerName')
  async getByCareerName(
  @Query('careerName') careerName: string,
  @Query('page') page: number,
  @Query('limit') limit: number,
  @Query('sortBy') sortBy = 'Priority',
  @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const career = await this.careerService.getByCareerName(careerName)
      log(career)
      const job = await this.jobService.getByCareer(page, limit, sortBy, sortOrder, career._id.toString())

      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByCompany')
  async getByCompany(
    @Query('companyId') companyId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const job = await this.jobService.getByCompany(companyId, page, limit, sortBy, sortOrder)
      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByNameWithKeyword')
  async getByNameWithKeyword(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const job = await this.jobService.getByNameWithKeyword(keyword, page, limit, sortBy, sortOrder)
      return job
    }
    catch(err){
      throw err
    }
  }

  @Get('getByTagsWithKeyword')
  async getByTagsWithKeyword(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const job = await this.jobService.getByTagsWithKeyword(keyword, page, limit, sortBy, sortOrder)
      return job
    }
    catch(err){
      return []
    }
  }

  @Get('getByLocationdWithKeyword')
  async getByLocationdWithKeyword(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const job = await this.jobService.getByLocationWithKeyWord(keyword, page, limit, sortBy, sortOrder)
      return job
    }
    catch(err){
      throw err
    }
  }
  
  @Get('getByRecruiter')
  async getByRecruiter(
    @Query('id') id: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'Priority',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc') {
    try{
      const job = await this.jobService.getByRecruiter(id, page, limit, sortBy, sortOrder);
      return job
    }
    catch(err){
      return[]
    }
  }

  @Put('updateJob')
  async updateJob(@Query('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    try{
      const job = await this.jobService.updateJob(id, updateJobDto);
      if(job._id == "500"){
        return {
          _id: "500",
        }
      }
      else return job;
    }
    catch(err){
      return {
        _id: "500",
      }
    }
  }







}
