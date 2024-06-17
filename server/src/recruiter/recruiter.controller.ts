import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { ObjectId } from 'mongoose';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { CompanyService } from 'src/company/company.service';
import { log } from 'console';

@Controller('recruiter')
export class RecruiterController {
  constructor(
    private readonly recruiterService: RecruiterService,
    private readonly companyService: CompanyService
  ) {}

  @Post('create')
  async create(@Body('recruiter') createRecruiterDto: CreateRecruiterDto,@Body('company') createCompanyDto: CreateCompanyDto){
    try{
      
      const newCompany = await this.companyService.create(createCompanyDto);
      if(newCompany._id!= "500"){
        const newRecruiter = await this.recruiterService.create(createRecruiterDto)
      if(newRecruiter._id!="500"){
        return newRecruiter;
      }else return{
        _id: "500"
      }
      }
      else{
        return{
          _id: "500"
        }
      
      }
    }
    catch(err){
      return{
        _id: "500",
        err: err

      }
    }
  }

  @Get('getAll')
  async findAll() {
    try{
      const recruiters = await this.recruiterService.findAll();
      return recruiters
    }
    catch(err){
      throw err;
    }
  }
  @Get('getByUser')
  async getByUser(@Query('_id') user: string) {
    try{
      const recruiter = await this.recruiterService.getByUser(user);
      if(recruiter._id.toString().length > 0){
        return recruiter
      }
      else{
        return{
          _id: "500"
        }
      
      }
    }
    catch(err){
      return{
        _id: "500",
        err: err
      }
    }
  }
  @Get('getBy_id')
  async findOne(@Query('id') id: string) {
    try{
      const recruiter = await this.recruiterService.getBy_id(id);
      return recruiter;
    }
    catch(err){
      return {
        _id: "500",
        err: err
      }
    }
  }

  @Put('update')
  async update(@Query('id') id: string, @Body() updateRecruiterDto: UpdateRecruiterDto) {
    log(id);
    try{
      const updatedRecruiter = await this.recruiterService.update(id, updateRecruiterDto);
      return updatedRecruiter;
    }
    catch(err){
      return {
        _id: "500",
        err: err
      }
    }
  }


  @Put('updateVoucher')
  async updateVoucher(@Body('id') id: string, @Body('voucher') voucher: ObjectId) {
    try{
      const updatedRecruiter = await this.recruiterService.updateVoucher(id, voucher);
      return updatedRecruiter;
    }
    catch(err){
      throw err;
    }
  }
}
