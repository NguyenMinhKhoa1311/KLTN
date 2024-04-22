import { HttpException, Injectable } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recruitment } from './entities/recruitment.entity';
import { Job } from 'src/job/entities/job.entity';
import { Candidate } from 'src/candidate/entities/candidate.entity';
import { Recruiter } from 'src/recruiter/entities/recruiter.entity';
import { log } from 'console';
import { Company } from 'src/company/entities/company.entity';
import { Career } from 'src/career/entities/career.entity';
import { Field } from 'src/field/entities/field.entity';
import { populate } from 'dotenv';

@Injectable()
export class RecruitmentService {
  constructor(
    @InjectModel(Recruitment.name) private RecruitmentModel: Model<Recruitment>,
    @InjectModel(Job.name) private JobModel: Model<Job>,
    @InjectModel(Candidate.name) private CandidateModel: Model<Candidate>,
    @InjectModel(Recruiter.name) private RecruiterModel: Model<Recruiter>,
    @InjectModel(Company.name) private CompanyModel: Model<Company>,
    @InjectModel(Career.name) private CareerModel: Model<Career>,
    @InjectModel(Field.name) private FieldModel: Model<Field>

  ){}
  async create(createRecruitmentDto: CreateRecruitmentDto) {
    try{
      const newRecruitment = new this.RecruitmentModel(createRecruitmentDto);
      return newRecruitment.save(); 
    }
    catch(error){
      return {
        message: error.message,
        _id: ""
      
      }
    }
  }
  async findByJob(job: string,page: number, limit: number ,sortBy ='createAt' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      return this.RecruitmentModel.find({Job: job})
      .populate('Recruiter','RecruiterId Name Phone', this.RecruiterModel)
      .populate('Candidate','CandidateId Name Email Phone', this.CandidateModel)
      .populate('Job','JobId Name', this.JobModel)
      .populate('Company','CompanyId Name Address', this.CompanyModel)
      .populate('Career','CareerId Name', this.CareerModel)
      .populate('Field','FieldId FieldName', this.FieldModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();

    }
    catch(error){
      return []
    }
  }

  findByRecruiter(recruiter: string, page: number, limit: number, sortBy = 'createAt', sortOrder: 'asc' | 'desc' = 'desc') {
    try {
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      return this.RecruitmentModel.find({ Recruiter: recruiter })
        .populate('Recruiter', 'RecruiterId Name Phone', this.RecruiterModel)
        .populate('Candidate', 'CandidateId Name Email Phone', this.CandidateModel)
        .populate('Job', 'JobId Name ', this.JobModel)
        .populate('Company','CompanyId Name Address', this.CompanyModel)
        .populate('Career','CareerId Name ', this.CareerModel)
        .populate('Field','FieldId FieldName', this.FieldModel)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .exec();
    }
    catch (error) {
      return []
    }
  }

  async findByCandidate(candidate: string,page: number, limit: number ,sortBy ='createAt' , sortOrder: 'asc'|'desc' = 'desc'){
    try{
      const sortOptions = { [sortBy]: sortOrder };
      const skip = page * limit;
      return await this.RecruitmentModel.find({Candidate: candidate})
      .populate('Recruiter','RecruiterId Name Phone', this.RecruiterModel)
      .populate('Candidate','CandidateId Name Email Phone', this.CandidateModel)
      .populate('Job','JobId Name ', this.JobModel)
      .populate('Company','CompanyId Name Address', this.CompanyModel)
      .populate('Career','CareerId Name', this.CareerModel)
      .populate('Field','FieldId FieldName', this.FieldModel)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
    }
    catch(error){
      return []
    }
  }
  async updateStatusSeen(status: boolean, id: string){
    try{
      return await this.RecruitmentModel.findByIdAndUpdate(id, {StatusSeenOfRecruiter: status}, {new: true})
      .populate('Recruiter','RecruiterId Name Phone', this.RecruiterModel)
      .populate('Candidate','CandidateId Name Email Phone', this.CandidateModel)
      .populate('Job','JobId Name ', this.JobModel)
      .populate('Company','CompanyId Name Address', this.CompanyModel)
      .populate('Career','CareerId Name', this.CareerModel)
      .populate('Field','FieldId FieldName', this.FieldModel)
      .exec();
    }
    catch(error){
      return{
        message: error.message,
        _id:""
      }
    }
  }

  async updateStatus(status: boolean, id: string){
    try{
      return await this.RecruitmentModel.findByIdAndUpdate(id, {Status: status}, {new: true})
      .populate('Recruiter','RecruiterId Name Phone', this.RecruiterModel)
      .populate('Candidate','CandidateId Name Email Phone', this.CandidateModel)
      .populate('Job','JobId Name ', this.JobModel)
      .populate('Company','CompanyId Name Address', this.CompanyModel)
      .populate('Career','CareerId Name', this.CareerModel)
      .populate('Field','FieldId FieldName', this.FieldModel)
      .exec();
    }
    catch(error){
      return{
        message: error.message,
        _id:""
      }
    }
  }

  async updateDateInterview(id: string, date: Date){
    try{
      return await this.RecruitmentModel.findByIdAndUpdate(id, {DateInterview: date, Status: true}, {new: true})
      .populate('Recruiter','RecruiterId Name Phone', this.RecruiterModel)
      .populate('Candidate','CandidateId Name Email Phone', this.CandidateModel)
      .populate('Job','JobId Name ', this.JobModel)
      .populate('Company','CompanyId Name Address', this.CompanyModel)
      .populate('Career','CareerId Name', this.CareerModel)
      .populate('Field','FieldId FieldName', this.FieldModel)
      .exec();
    }
    catch(error){
      return{
        message: error.message,
        _id:""
      }
    }
  }

  async delete(id: string){
    try{
      const recruitment = await this.RecruitmentModel.findByIdAndDelete(id).exec();
      return recruitment;
    }
    catch(error){
      return {
        message: error.message,
        _id: ""
      }
    }
  }

}
