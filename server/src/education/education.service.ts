import { HttpException, Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education.name) private educationModel: Model<Education>
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    try {
      const education = new this.educationModel(createEducationDto);
      return await education.save();
    } catch (err) {
      throw new HttpException(err.message,err.status);
    }
  }

  findAll() {
    return `This action returns all education`;
  }

  findOne(id: number) {
    return `This action returns a #${id} education`;
  }

  update(id: number, updateEducationDto: UpdateEducationDto) {
    return `This action updates a #${id} education`;
  }

  remove(id: number) {
    return `This action removes a #${id} education`;
  }
}
