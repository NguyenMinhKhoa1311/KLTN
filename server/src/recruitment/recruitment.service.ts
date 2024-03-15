import { HttpException, Injectable } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recruitment } from './entities/recruitment.entity';

@Injectable()
export class RecruitmentService {
  constructor(
    @InjectModel(Recruitment.name) private RecruitmentModel: Model<Recruitment>
  ){}
  async create(createRecruitmentDto: CreateRecruitmentDto) {
    try{
      const newRecruitment = new this.RecruitmentModel(createRecruitmentDto);
      return newRecruitment.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all recruitment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recruitment`;
  }

  update(id: number, updateRecruitmentDto: UpdateRecruitmentDto) {
    return `This action updates a #${id} recruitment`;
  }

  remove(id: number) {
    return `This action removes a #${id} recruitment`;
  }
}
