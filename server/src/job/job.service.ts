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

  async updateStatusPayment(id: String, status: boolean) {
    try{
      if(status){
        const updateJob = await this.JobModel.findOneAndUpdate(
          {JobId: id},
          { StatusPayment: true,
            StatusRecruitment: true
          },
          {new:true}
          );
          return updateJob;
      }
      else{
        const updateJob = await this.JobModel.findOneAndUpdate(
          {JobId: id},
          {
            StatusPayment: true,
            StatusRecruitment: true
          },
          {new:true}
          );
          return updateJob;
      }

    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }


}
