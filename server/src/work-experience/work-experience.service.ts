import { HttpException, Injectable } from '@nestjs/common';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WorkExperience } from './entities/work-experience.entity';
import { Model } from 'mongoose';

@Injectable()
export class WorkExperienceService {
  constructor(
    @InjectModel(WorkExperience.name) private workExperienceModel: Model<WorkExperience>
  ) {}
  async create(createWorkExperienceDto: CreateWorkExperienceDto) {
    try {
      const workExperience = new this.workExperienceModel(createWorkExperienceDto);
      return await workExperience.save();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  findAll() {
    return `This action returns all workExperience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workExperience`;
  }

  update(id: number, updateWorkExperienceDto: UpdateWorkExperienceDto) {
    return `This action updates a #${id} workExperience`;
  }

  remove(id: number) {
    return `This action removes a #${id} workExperience`;
  }
}
