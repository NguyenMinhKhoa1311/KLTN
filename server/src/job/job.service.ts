import { HttpException, Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './entities/job.entity';
import { Model } from 'mongoose';
import { log } from 'console';
import { Recruiter } from 'src/recruiter/entities/recruiter.entity';
import { Field } from 'src/field/entities/field.entity';
import { Career } from 'src/career/entities/career.entity';
import { ServicePackage } from 'src/service-package/entities/service-package.entity';
import { Company } from 'src/company/entities/company.entity';
import { Recruitment } from 'src/recruitment/entities/recruitment.entity';

@Injectable()
export class JobService {

 constructor(
  @InjectModel(Job.name) private JobModel: Model<Job>,
  @InjectModel(Recruiter.name) private recruiterModel: Model<Recruiter>,
  @InjectModel(Field.name) private fieldModel: Model<Field>,
  @InjectModel(Career.name) private careerModel: Model<Career>,
  @InjectModel(ServicePackage.name) private servicePackageModel: Model<ServicePackage>,
  @InjectModel(Company.name) private companyModel: Model<Company>,
  @InjectModel(Recruitment.name) private recruitertmentModel: Model<Recruitment>

 )
{}
  async create(createJobDto: CreateJobDto) {
    try{
      const newJob = new this.JobModel(createJobDto);
      return newJob.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getAll(){
    try{
      const jobs = await this.JobModel.find()
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .exec();;
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getAllAndSort(page: number, limit: number ,sortBy ='createAt' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find()
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name ', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name Priority Hot ColorTitle Urgent', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByCareer(page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc', careerId: string){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({Career: careerId})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name ', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByField(page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc', fieldId: string){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({Field: fieldId})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  
  async getByPriority(page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc',priority: number){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({Priority: priority})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByHotJob(page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({Hot: true})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getById(id: string){
    try{
      const job = await this.JobModel.findOne({JobId: id})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .exec();
      return job
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }

  }



  async updateStatusPayment(id: String, status: boolean) {
    try{
        const updateJob = await this.JobModel.findOneAndUpdate(
          {JobId: id},
          { StatusPayment: status,
            StatusRecruitment: status
          },
          {new:true}
          );
          return updateJob;
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async updateStatusRecruitment(id: String, status: boolean) {
    try{
        const updateJob = await this.JobModel.findOneAndUpdate(
          {JobId: id},
          { 
            StatusRecruitment: true
          },
          {new:true}
          );
          return updateJob;
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByCompany(companyId: String,page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({Company: companyId})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      []
    }
  }

  async getByNameWithKeyword(keyword: string, page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({"Name": {"$regex": keyword, "$options": "i"}})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }

  async getByTagsWithKeyword(keyword: string, page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({"Tags": {"$regex": keyword, "$options": "i"}})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Job', this.recruiterModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }

  async getByLocationWithKeyWord(keyword: string, page: number, limit: number ,sortBy ='Priority' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      const jobs = await this.JobModel.find({"Location": {"$regex": keyword, "$options": "i"}})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }




}
