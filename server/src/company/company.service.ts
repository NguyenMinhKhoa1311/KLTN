import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './entities/company.entity';
import { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  
  constructor(
    @InjectModel(Company.name) private CompanyModel: Model<Company>
  ){}

  async create(createCompanyDto: CreateCompanyDto) {
    try{
      const newCompany = new this.CompanyModel(createCompanyDto);
      return newCompany.save();
    }
    catch(error){
      throw error;
    }
  }

  async getAllWithLimit(limit: number, page: number) {
      return await this.CompanyModel.find().limit(limit).skip(limit * page);
  }

}
