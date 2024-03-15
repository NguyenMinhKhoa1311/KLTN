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

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
