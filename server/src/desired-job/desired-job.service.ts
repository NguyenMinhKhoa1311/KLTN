import { HttpException, Injectable } from '@nestjs/common';
import { CreateDesiredJobDto } from './dto/create-desired-job.dto';
import { UpdateDesiredJobDto } from './dto/update-desired-job.dto';
import { DesiredJob } from './entities/desired-job.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Career } from 'src/career/entities/career.entity';
import { Field } from 'src/field/entities/field.entity';
import { log } from 'console';

@Injectable()
export class DesiredJobService {
  constructor(
    @InjectModel(DesiredJob.name) private DesiredJobModel: Model<DesiredJob>,

  ){}
  async create(createDesiredJobDto: CreateDesiredJobDto) {
    try {
      const newDesiredJob = await new this.DesiredJobModel(createDesiredJobDto).save();
      if (newDesiredJob._id.toString().length > 0) {
        return newDesiredJob;
      }
      else {
        return {
          _id: "500",
        }
      }
    }
    catch(err){
      log(err);
      return {
        _id: "500",
      }
    }
  }

  async findAll() {
    try{
      return await this.DesiredJobModel.find().exec();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async delete(id: string) {
    try{
      return await this.DesiredJobModel.findByIdAndDelete(id).exec();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async update(id: string, updateDesiredJobDto: UpdateDesiredJobDto) {
    try{
      return await this.DesiredJobModel.findByIdAndUpdate(id,updateDesiredJobDto).exec();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }
}
