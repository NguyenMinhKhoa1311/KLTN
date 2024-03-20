import { HttpException, Injectable } from '@nestjs/common';
import { CreateCandidateSkillDto } from './dto/create-candidate-skill.dto';
import { UpdateCandidateSkillDto } from './dto/update-candidate-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CandidateSkill } from './entities/candidate-skill.entity';

@Injectable()
export class CandidateSkillService {
  constructor(@InjectModel(CandidateSkill.name) private candidateSkillModel: Model<CandidateSkill>) {}
  async create(createCandidateSkillDto: CreateCandidateSkillDto) {
    try {
      const candidateSkill = new this.candidateSkillModel(createCandidateSkillDto);
      return await candidateSkill.save();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  findAll() {
    return `This action returns all candidateSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidateSkill`;
  }

  update(id: number, updateCandidateSkillDto: UpdateCandidateSkillDto) {
    return `This action updates a #${id} candidateSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidateSkill`;
  }
}
