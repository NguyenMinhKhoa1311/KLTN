import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';

@Injectable()
export class SkillService {

  constructor(
    @InjectModel(Skill.name) private skillModel: Model<Skill>
  ){

  }

  async create(createSkillDto: CreateSkillDto) {
    try{
      log(createSkillDto)
       const skill = await new this.skillModel(createSkillDto).save();
       if(skill._id.toString().length > 0){
         return skill;
       }
       else{
         return {
           _id: "500",
         };
       }
    }
    catch(err){
      return {
        _id: "500",
        err: err
      }
    }
  }
  async update(updateSkillDto: any) {
    try{
       const skill = await this.skillModel.findByIdAndUpdate(updateSkillDto._id, updateSkillDto,{new:true})
       if(skill._id.toString().length > 0){
         return skill;
       }
       else{
         return {
           _id: "500",
         };
       }
      }
      catch(err){
        return {
          _id: "500",
          err: err
        }
      }
  }

  async delete(id: string){
    try{
      log(id);
      const skill = await this.skillModel.findByIdAndDelete(id);
      log(skill)
      if(skill._id.toString().length > 0){
        return true;
      }
      else{
        return false;
      }
    }
    catch(err){
      return false;
    }
  }
}
