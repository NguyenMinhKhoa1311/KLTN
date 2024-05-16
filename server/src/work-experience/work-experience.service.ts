import { HttpException, Injectable } from '@nestjs/common';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WorkExperience } from './entities/work-experience.entity';
import { Model } from 'mongoose';
import { log } from 'console';

@Injectable()
export class WorkExperienceService {
  constructor(
    @InjectModel(WorkExperience.name) private workExperienceModel: Model<WorkExperience>
  ) {}
  async create(createWorkExperienceDto: CreateWorkExperienceDto) {
    try {
      const workExperience = await new this.workExperienceModel(createWorkExperienceDto).save();
      if(workExperience._id.toString().length>0){
        return workExperience;
      }
      else{
        return {
          _id: "500",
        }
      }
    } catch (err) {
      return {
        _id: "500",
      }
    }
  }

  async update(updateWorkExperience: any) {
    try{
      log("service"+updateWorkExperience);
      const workExperience = await this.workExperienceModel.findByIdAndUpdate(updateWorkExperience._id, updateWorkExperience,{new:true}).exec();
      log("service 2"+workExperience);
      if(workExperience._id.toString().length > 0){
        return workExperience;
      }
      else{
        log("service 2"+workExperience);
        return {
          _id: "500",
        }
      }
    }
    catch(err){
      log("service 2"+err);
      return {
        _id: "500",
      }
    }
  }

  async delete(id: string){
    try{
      const workExperience = await this.workExperienceModel.findByIdAndDelete(id);
      if(workExperience._id.toString().length > 0){
        return true;
      }
      else{
        return false
      }
    }
    catch(err){
      return false
    }
  }

}
