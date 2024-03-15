import { HttpException, Injectable } from '@nestjs/common';
import { CreateDesiredJobDto } from './dto/create-desired-job.dto';
import { UpdateDesiredJobDto } from './dto/update-desired-job.dto';
import { DesiredJob } from './entities/desired-job.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Career } from 'src/career/entities/career.entity';
import { Field } from 'src/field/entities/field.entity';

@Injectable()
export class DesiredJobService {
  constructor(
    @InjectModel(DesiredJob.name) private DesiredJobModel: Model<DesiredJob>,
    @InjectModel(Career.name) private CareerModel: Model<Career>,
    @InjectModel(Field.name) private FieldModel: Model<Field>

  ){}
  async create(createDesiredJobDto: CreateDesiredJobDto) {
    try {
      const newDesiredJob = new this.DesiredJobModel(createDesiredJobDto);
      return newDesiredJob.save();
    }
    catch(err){
      throw err;
    }
  }

  async findAll() {
    try{
      return await this.DesiredJobModel.find()
      .populate('Career','CareerId Name', this.CareerModel)
      .populate('Field','FieldId Name', this.FieldModel)
      .exec();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} desiredJob`;
  }

  update(id: number, updateDesiredJobDto: UpdateDesiredJobDto) {
    return `This action updates a #${id} desiredJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} desiredJob`;
  }
}
