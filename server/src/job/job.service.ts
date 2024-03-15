import { HttpException, Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './entities/job.entity';
import { Model } from 'mongoose';

@Injectable()
export class JobService {

 constructor(
  @InjectModel(Job.name) private JobModel: Model<Job>
 )
{}
  async create(createJobDto: CreateJobDto) {
    try{
      const newJob = new this.JobModel(createJobDto);
      return newJob.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all job`;
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
