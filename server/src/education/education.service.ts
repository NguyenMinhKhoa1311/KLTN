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
      const education =await new this.educationModel(createEducationDto).save();
      if(education._id.toString().length > 0){
        return education;
      }
      else{
        return {
          _id: "500",
        };
      }
    } catch (err) {
      return {
        _id: "500",
      }
    };
  }

  async delete(id: string){
    try{
      const education = await this.educationModel.findByIdAndDelete(id);
      if(education._id.toString().length > 0){
        return true;
      }
      else{
        return false;
      }
    }
    catch(err){
      return false;
    }
  }
}
