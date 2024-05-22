import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { JobService } from 'src/job/job.service';
import { CareerService } from 'src/career/career.service';
import { FieldService } from 'src/field/field.service';
import { CompanyService } from 'src/company/company.service';
import { log } from 'console';

@Controller('bill')
export class BillController {
  constructor(
    private readonly billService: BillService,
    private readonly jobService: JobService,
    private readonly fieldService: FieldService,
    private readonly careerService: CareerService,
    private readonly companyService: CompanyService
  ) {}

  @Post('create')
  async create(@Body() createBillDto: CreateBillDto) {
    try {
      log(createBillDto);
      const bill = await this.billService.create(createBillDto);
      if(bill._id){
        const job = await this.jobService.updateStatusPayment(createBillDto.Job, true);
        const field = await this.fieldService.increaseQuantity(createBillDto.Field);
        const career = await this.careerService.increaseQuantity(createBillDto.Career);
        const company = await this.companyService.increaseJobQuantity(createBillDto.Company);
        log(job._id && field && career && company)
        if(job._id && field && career && company){
          return bill;
        }else return { 
          _id:"500"
        }
      }else return { 
        _id:"500"
      }
    }
    catch(err){
      log(err.message)
      return { 
        _id:"500",
        message: err.message
      }
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
