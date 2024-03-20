import { HttpException, Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Skill } from './entities/skill.entity';
import { Model } from 'mongoose';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<Skill> 
    ){}
  async create(createSkillDto: CreateSkillDto) {
    try {
      const newSkill = new this.skillModel(createSkillDto);
      return newSkill.save();
    }
    catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  findAll() {
    return `This action returns all skill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
