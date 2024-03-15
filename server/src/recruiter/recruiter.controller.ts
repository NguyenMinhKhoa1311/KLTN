import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
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
      return newRecruiter;
    }
    catch(err){
      throw err;
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recruiterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecruiterDto: UpdateRecruiterDto) {
    return this.recruiterService.update(+id, updateRecruiterDto);
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recruiterService.remove(+id);
  }
}
