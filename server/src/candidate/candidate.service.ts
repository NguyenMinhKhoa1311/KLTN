import { HttpException, Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './entities/candidate.entity';
import { Model } from 'mongoose';
import { log } from 'console';
import { Career } from 'src/career/entities/career.entity';
import { Field } from 'src/field/entities/field.entity';
import { Education } from 'src/education/entities/education.entity';
import { WorkExperience } from 'src/work-experience/entities/work-experience.entity';
import { DesiredJob } from 'src/desired-job/entities/desired-job.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { Reference } from 'src/references/entities/reference.entity';
import { Job } from 'src/job/entities/job.entity';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name) private CandidateModel: Model<Candidate>,
    @InjectModel(Career.name) private CareerModel: Model<Career>,
    @InjectModel(Field.name) private FieldModel: Model<Field>,
    @InjectModel(Education.name) private EducationModel: Model<Education>,
    @InjectModel(WorkExperience.name) private WorkExperienceModel: Model<WorkExperience>,
    @InjectModel(DesiredJob.name) private DesiredJobModel: Model<DesiredJob>,
    @InjectModel(Skill.name) private SkillModel: Model<Skill>,
    @InjectModel(Reference.name) private ReferenceModel: Model<Reference>,
    @InjectModel(Job.name) private JobModel: Model<Job>,
  ){}
  async create(createCandidateDto: CreateCandidateDto) {
    try {
      log(createCandidateDto);
      const newCandidate = new this.CandidateModel(createCandidateDto);
      return newCandidate.save();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async findAll() {
    try{
      return await this.CandidateModel.find()
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId FieldName', this.FieldModel).exec();

    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async findAllNoPopulate() {
    try{
      return await this.CandidateModel.find().exec();
    }
    catch(err){
      return []
    }
  }

  async findByUser(user:string){
    try{
      const candidate = await this.CandidateModel.findOne({ User: user })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(!candidate){
        return {
          _id: "404 candidate not found",
          CandidateId: "404 candidate not found",
          Name: "404 candidate not found",
          Avatar: "404 candidate not found",
          Gender: "404 candidate not found",
        }
      }
      return candidate;
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }


  async findById(id: string){
    try{
      const candidate = await this.CandidateModel.findById(id)
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary Tags Address', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel).exec();
      if(candidate._id.toString.length > 0){
        return candidate;
      }else{
        return {
          _id: "500"
        }
      }
    }
    catch(err){
      return {
        _id: "500",
      }
    }
  }
  async findByEmailAndConvertToCandidate(email:string){
    try{
      const candidate = await this.CandidateModel.findOne({ User: email })
      return candidate;
  }catch(err){
    return {
      _id: "500",
    }
  }
}




  //update
  async updateEducation(id:string, education_id:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        // Use $push operator to add to the Education array
        $push: { Education: education_id }
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
        err: err
      }
    }
  }

  async updateWorkExperience(id:string, workExperience_id:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        // Use $push operator to add to the WorkExperience array
        $push: { WorkExperience: workExperience_id }
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
      }
    }
  }

  async updateSkill(id:string, skill:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        $push:  {Skills: skill}
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
      }
    }
  }
  async updateLanguage(id:string, language:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        $push:  {Languages: language}
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
      }
    }
  }

  async banCandidate(id:string){
    try{
      const candidateBanned = await this.CandidateModel.findByIdAndUpdate(id, {
        isBan: true
      },
      {
        new: true 
      })
      .exec();
      log(candidateBanned);
      if(candidateBanned._id.toString().length > 0){
        return true;
      }else{
        return false;
      }
    }catch(err){
      return false
    }
  }
  async unBanCandidate(id:string){
    try{
      const candidateBanned = await this.CandidateModel.findByIdAndUpdate(id, {
        isBan: false
      },
      {
        new: true 
      })
      .exec();
      if(candidateBanned._id.toString().length > 0){
        return true;
      }else{
        return false;
      }
    }catch(err){
      return false
    }
  }

  async updateCareerGoal(id:string, careerGoal:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        CareerGoal: careerGoal
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
      }
    }
  }

  async updateAvatar(id:string, storage: any){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        Avatar: storage.urls[0],
        Storage: storage._id
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
        err: err,
      }
    }
  }

  async updateFavoriteJobs(id:string, job_id:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        $push: { FavoriteJobs: job_id }
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
      }
    }
  }

  async updateBasicInfo(id: string, updateCandidateDto: UpdateCandidateDto){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        Name:updateCandidateDto.Name,
        Email:updateCandidateDto.Email,
        Phone:updateCandidateDto.Phone,
        Address:updateCandidateDto.Address,
        Position:updateCandidateDto.Position,
        Experience:updateCandidateDto.Experience,
        DateOfBirth:updateCandidateDto.DateOfBirth,
        Career:updateCandidateDto.Career,
        Field:updateCandidateDto.Field
      },
      { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    } catch(err){
      return{
        _id: "500",
      }
    }
  }

  async updateDesiredJob(id: string, desiredJob_id: string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        DesiredJob: desiredJob_id
      },
      { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    } catch(err){
      log(err)
      return{
        _id: "500",
      }
    }
  }
  async updateReference(id:string, reference_id:string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, 
      {$push: {References: reference_id}},
      { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    } catch(err){
      return{
        _id: "500",
      }
    }
  }



  /// delete
  async deleteFavoriteJobs(id:string, job_id :string){
    try{
      const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
        // Use $pull operator to remove from the FavoriteJobs array
        $pull: { FavoriteJobs: job_id }
      }, { new: true })
      .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
      .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
      .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
      .populate('Skills', 'SkillId Name Level',this.SkillModel)
      .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
      .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
      .populate('Career', 'CareerId Name', this.CareerModel)
      .populate('Field', 'FieldId Name', this.FieldModel)
      .exec();
      if(candidateAfterUpdate._id.toString().length > 0){
        return candidateAfterUpdate;
      }
      else{
        return {
          _id: "500",
        };
      
      }
    }
    catch(err){
      return{
        _id: "500",
      }
    }
}

async deleteSkills(id:string, job_id :string){
  try{
    const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
      // Use $pull operator to remove from the Skills array
      $pull: { Skills: job_id }
    }, { new: true })
    .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
    .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
    .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
    .populate('Skills', 'SkillId Name Level',this.SkillModel)
    .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
    .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
    .populate('Career', 'CareerId Name', this.CareerModel)
    .populate('Field', 'FieldId Name', this.FieldModel)
    .exec();
    if(candidateAfterUpdate._id.toString().length > 0){
      return candidateAfterUpdate;
    }
    else{
      return {
        _id: "500",
      };
    
    }
  }
  catch(err){
    return{
      _id: "500",
    }
  }
}

async deleteReference(id:string, reference:string){
  try{
    const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
      $pull:  {References: reference}
    }, { new: true })
    .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
    .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
    .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
    .populate('Skills', 'SkillId Name Level',this.SkillModel)
    .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
    .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
    .populate('Career', 'CareerId Name', this.CareerModel)
    .populate('Field', 'FieldId Name', this.FieldModel)
    .exec();
    if(candidateAfterUpdate._id.toString().length > 0){
      return candidateAfterUpdate;
    }
    else{
      return {
        _id: "500",
      };
    
    }
  }
  catch(err){
    return{
      _id: "500",
    }
  }
}

async deleteEducation(id:string, job_id :string){
  try{
    const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
      // Use $pull operator to remove from the Education array
      $pull: { Education: job_id }
    }, { new: true })
    .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
    .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
    .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
    .populate('Skills', 'SkillId Name Level',this.SkillModel)
    .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
    .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
    .populate('Career', 'CareerId Name', this.CareerModel)
    .populate('Field', 'FieldId Name', this.FieldModel)
    .exec();
    if(candidateAfterUpdate._id.toString().length > 0){
      return candidateAfterUpdate;
    }
    else{
      return {
        _id: "500",
      };
    
    }
  }
  catch(err){
    return{
      _id: "500",
    }
  }
}

async deleteWorkExperience(id:string, job_id :string){
  try{
    const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
      // Use $pull operator to remove from the WorkExperience array
      $pull: { WorkExperience: job_id }
    }, { new: true })
    .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
    .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
    .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
    .populate('Skills', 'SkillId Name Level',this.SkillModel)
    .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
    .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
    .populate('Career', 'CareerId Name', this.CareerModel)
    .populate('Field', 'FieldId Name', this.FieldModel)
    .exec();
    if(candidateAfterUpdate._id.toString().length > 0){
      return candidateAfterUpdate;
    }
    else{
      return {
        _id: "500",
      };
    
    }
  }
  catch(err){
    return{
      _id: "500",
    }
  }
}

async deleteLanguage(id:string, language:string){
  try{
    const candidateAfterUpdate = await this.CandidateModel.findByIdAndUpdate(id, {
      $pull:  {Languages: language}
    }, { new: true })
    .populate('Education','EducationId School Degree StartDate EndDate Major', this.EducationModel)
    .populate('WorkExperience', 'WorkExperienceId CompanyName JobTitle Description StartDate EndDate', this.WorkExperienceModel)
    .populate('DesiredJob', 'DesiredJobId Location Salary', this.DesiredJobModel)
    .populate('Skills', 'SkillId Name Level',this.SkillModel)
    .populate('FavoriteJobs', 'JobId Name Salary', this.JobModel)
    .populate('References', 'ReferenceId Name Email Position Company Phone', this.ReferenceModel)
    .populate('Career', 'CareerId Name', this.CareerModel)
    .populate('Field', 'FieldId Name', this.FieldModel)
    .exec();
    if(candidateAfterUpdate._id.toString().length > 0){
      return candidateAfterUpdate;
    }
    else{
      return {
        _id: "500",
      };
    
    }
  }
  catch(err){
    return{
      _id: "500",
    }
  }
}




}


