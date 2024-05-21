import { HttpException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './entities/company.entity';
import { Model } from 'mongoose';
import { Field } from 'src/field/entities/field.entity';
import { Career } from 'src/career/entities/career.entity';
import { log } from 'console';

@Injectable()
export class CompanyService {
  
  constructor(
    @InjectModel(Company.name) private CompanyModel: Model<Company>,
    @InjectModel(Field.name) private fieldModel: Model<Field>,
    @InjectModel(Career.name) private careerModel: Model<Career>
  ){}

  async create(createCompanyDto: CreateCompanyDto) {
    try{
      const newCompany = await new this.CompanyModel(createCompanyDto).save();
      console.log(newCompany);
      
      if(newCompany._id.toString().length>0){
        return newCompany;
      }else{
        return {
          _id:"500"
        }
      }

    }
    catch(error){
      log(error);
      return{
        _id:"500",
        error:error
      }
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
    .exec();
  }
  async getByNameWithKeyword(keyword: string, page: number, limit: number,sortBy ='createAt' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const companies = await this.CompanyModel.find({"Name": {"$regex": keyword, "$options": "i"}})
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return companies;
    }
    catch(error){
      return []
    }
  }

  async increaseJobQuantity(id: string){
    try{
      const company = await this.CompanyModel.findByIdAndUpdate(
        id,
        {$inc:{JobQuantity:1}},
        {new: true}
      )
      if(company._id.toString().length>0){
        return true;
      }
      else{
        return false;
      }
    }
    catch(error){
      return false;
    }
  }

  async decreaseJobQuantity(id: string){
    try{
      const companyToUpdate = await this.CompanyModel.findById(id).exec();
      if(companyToUpdate.JobQuantity <= 0){
        return false;
      }
      else{
        const company = await this.CompanyModel.findByIdAndUpdate(
          id,
          {$inc:{JobQuantity:-1}},
          {new: true}
        )
        if(company._id.toString().length>0){
          return true;
        }
        else{
          return false;
        }
      }
    }
    catch(error){
      return false;
    }
  }

}
