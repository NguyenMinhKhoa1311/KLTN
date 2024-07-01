import { Injectable } from '@nestjs/common';
import { CreateBanDto } from './dto/create-ban.dto';
import { UpdateBanDto } from './dto/update-ban.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ban } from './entities/ban.entity';
import { Model } from 'mongoose';
import { Candidate } from 'src/candidate/entities/candidate.entity';
import { Recruiter } from 'src/recruiter/entities/recruiter.entity';
import { log } from 'console';

@Injectable()
export class BanService {
  constructor(
    @InjectModel(Ban.name) private readonly banModel: Model<Ban>,
    @InjectModel(Candidate.name) private readonly candidateModel: Model<Candidate>,
    @InjectModel(Recruiter.name) private readonly recruiterModel: Model<Recruiter>
  ) {}
  async create(createBanDto: CreateBanDto) {
    const ban = new this.banModel(createBanDto)
    const newBan = await ban.save();
    if(newBan._id){
      return true;
    }else{
      return false
    }
  }
  async delete(id: string){
    try{
      const deleteBan = await this.banModel.findByIdAndDelete(id);
      if(deleteBan._id){
        return true;
      }else{
        return false
      }
    }
    catch(error){
      return false
    }
  }
  async findByCandidate(id: string){
    try{
      const ban = await this.banModel.findOne({Candidate: id})
      .populate('Candidate').exec();
      if(ban._id){
        return ban;
      }else{
        return {
          _id:"500"
        }
      }
    }catch(error){
      return {
        _id:"500",
        error:error
      }
    }
  }
  async findByRecruiter(id: string){
    try{
      const ban = await this.banModel.findOne({Recruiter: id})
      .populate('Recruiter').exec();
      if(ban._id){
        return ban;
      }else{
        return {
          _id:"500"
        }
      }
    }catch(error){
      return {
        _id:"500",
        error:error
      }
    }
  }


}
