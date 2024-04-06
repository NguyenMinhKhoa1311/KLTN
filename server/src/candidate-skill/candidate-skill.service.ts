import { HttpException, Injectable } from '@nestjs/common';
import { CreateCandidateSkillDto } from './dto/create-candidate-skill.dto';
import { UpdateCandidateSkillDto } from './dto/update-candidate-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CandidateSkill } from './entities/candidate-skill.entity';
import { log } from 'console';

@Injectable()
export class CandidateSkillService {
  constructor(@InjectModel(CandidateSkill.name) private candidateSkillModel: Model<CandidateSkill>) {}
  async create(createCandidateSkillDto: CreateCandidateSkillDto) {
    try {
      const candidateSkill = await new this.candidateSkillModel(createCandidateSkillDto).save();
      if(candidateSkill._id.toString().length > 0){
        return candidateSkill;
      }
      else{
        return {
          _id: "500",
        }
      }
    } catch (err) {
      return{
        _id: "500",
      }
    }
  }
  async delete(id: string){
    try{
      const candidateSkill = await this.candidateSkillModel.findByIdAndDelete(id);
      if(candidateSkill._id.toString().length > 0){
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
