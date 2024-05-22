import { Body, Controller, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { PaymentService } from './payment.service';
import { RecruiterService } from 'src/recruiter/recruiter.service';
import { JobService } from 'src/job/job.service';
import { CreateBillDto } from 'src/bill/dto/create-bill.dto';
import { generateUuid } from 'src/environments/evironment';
import { log } from 'console';
import { BillService } from 'src/bill/bill.service';
import { CompanyService } from 'src/company/company.service';
import { CareerService } from 'src/career/career.service';
import { FieldService } from 'src/field/field.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly billService: BillService,
    private readonly jobService: JobService,
    private readonly recruiterService: RecruiterService,
    private readonly fieldService: FieldService,
    private readonly careerService: CareerService,
    private readonly companyService: CompanyService
    
  ) {}
  @Post('create')
  async createPayment(@Body() createBillDto: CreateBillDto){
    return this.paymentService.createPayment(createBillDto);
  }
  @Post('callback')
  async handleCallback(@Body() body: any, @Res() res: Response): Promise<void> {
    // console.log('callback: ');
    // console.log(body);
    // log(JSON.parse(decodeURIComponent(body.extraData)))
    const createBillDto = JSON.parse(decodeURIComponent(body.extraData));
    try {
      log(createBillDto);
      const bill = await this.billService.create(createBillDto);
      if(bill._id){
        const job = await this.jobService.updateStatusPayment(createBillDto.Job, true);
        const field = await this.fieldService.increaseQuantity(createBillDto.Field);
        const career = await this.careerService.increaseQuantity(createBillDto.Career);
        const company = await this.companyService.increaseJobQuantity(createBillDto.Company);
        log(job._id && field && career && company)
      }
    }
    catch(err){
      log(err.message)
    }

    


  }

}
