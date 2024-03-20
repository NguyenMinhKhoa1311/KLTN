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
import { Tag } from 'src/tag/entities/tag.entity';
import { ServicePackage } from 'src/service-package/entities/service-package.entity';
import { Company } from 'src/company/entities/company.entity';

@Injectable()
export class JobService {

 constructor(
  @InjectModel(Job.name) private JobModel: Model<Job>,
  @InjectModel(Recruiter.name) private recruiterModel: Model<Recruiter>,
  @InjectModel(Field.name) private fieldModel: Model<Field>,
  @InjectModel(Career.name) private careerModel: Model<Career>,
  @InjectModel(Company.name) private companyModel: Model<Company>,
  @InjectModel(Tag.name) private tagModel: Model<Tag>,
  @InjectModel(ServicePackage.name) private servicePackageModel: Model<ServicePackage>,
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
      .populate('Company','CompanyId Name', this.companyModel)
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name', this.recruiterModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('Tags','TagId Name', this.tagModel)
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
      .populate('Company','CompanyId Name', this.companyModel)
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name', this.recruiterModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('Tags','TagId Name', this.tagModel)
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


}