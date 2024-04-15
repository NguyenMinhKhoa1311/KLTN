import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companyService.create(createCompanyDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('getAllWithLimit')
  async getAllWithLimit(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    return await this.companyService.getAllWithLimit(page, limit, sortBy, sortOrder);
  }

  @Get('getBy_id')
  async getBy_id(@Query('id') id: string) {
    try{
     const company = await this.companyService.getBy_id(id);
     if(company._id.toString().length > 0){
       return company;
     }else{
       return{
        _id: "500"
       }
      }
    }
    catch (error) {
     return{
        _id: "500",
        error: error

     }
    } 
  }


}
