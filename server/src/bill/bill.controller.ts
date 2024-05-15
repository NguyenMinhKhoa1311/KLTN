import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post('create')
  async create(@Body() createBillDto: CreateBillDto) {
    try {
      const bill = await this.billService.create(createBillDto);
      return bill;
    }
    catch(err){
      throw err;
    }
  }
  @Get('getByMonth')
  async getByMonth(@Query('recruiter') recruiter: string,@Query('month') month: number, @Query('year') year: number){
    try{
      return await this.billService.getByMonth(month, year,recruiter);
    }
    catch(err){
      return []
    }
  }
  @Get('getByYear')
  async getByYear(@Query('recruiter') recruiter: string, @Query('year') year: number){
    try{
      return await this.billService.getByYear(year,recruiter);
    }
    catch(err){
      return []
    }
  }
  @Get('getByDate')
  async getByDate(@Query('recruiter') recruiter: string,@Query('date') date: Date){
    try{
      return await this.billService.getByDate(date,recruiter);
    }
    catch(err){
      return []
    }
  }


}
