import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { ObjectId } from 'mongoose';

@Controller('recruiter')
export class RecruiterController {
  constructor(private readonly recruiterService: RecruiterService) {}

  @Post('create')
  async create(@Body() createRecruiterDto: CreateRecruiterDto) {
    try{
      const newRecruiter = await this.recruiterService.create(createRecruiterDto)
      if(newRecruiter._id.toString().length > 0){
        return newRecruiter;
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
