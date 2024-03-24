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
  ) {
    return await this.companyService.getAllWithLimit(page, limit);
  }


}
