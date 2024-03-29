import { HttpException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './entities/company.entity';
import { Model } from 'mongoose';
import { Field } from 'src/field/entities/field.entity';
import { Career } from 'src/career/entities/career.entity';

@Injectable()
export class CompanyService {
  
  constructor(
    @InjectModel(Company.name) private CompanyModel: Model<Company>,
    @InjectModel(Field.name) private fieldModel: Model<Field>,
    @InjectModel(Career.name) private careerModel: Model<Career>
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

  async getAllWithLimit(page: number, limit: number ,sortBy ='createAt' , sortOrder: 'asc'|'desc' = 'desc') {
    const sortOptions = { [sortBy]: sortOrder };
    const skip = page * limit;
      return await this.CompanyModel.find()
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
  }

  async getBy_id(id: string){
    return await this.CompanyModel.findById(id)
    .populate('Field', 'FieldId FieldName', this.fieldModel)
    .populate('Career', 'CareerId CareerName', this.careerModel)
    .exec();
  }

  async increaseJobQuantity(id: string){
    try{
      const company = await this.CompanyModel.findByIdAndUpdate(
        id,
        {$inc:{JobQuantity:1}},
        {new: true}
      )
      return company
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async decreaseJobQuantity(id: string){
    try{
      const companyToUpdate = await this.CompanyModel.findById(id).exec();
      if(companyToUpdate.JobQuantity <= 0){
        throw new HttpException('JobQuantity cannot be less than 0', 400);
      }
      else{
        const company = await this.CompanyModel.findByIdAndUpdate(
          id,
          {$inc:{JobQuantity:-1}},
          {new: true}
        )
        return company;
      }
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

}
