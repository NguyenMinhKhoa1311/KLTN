import { HttpException, Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './entities/candidate.entity';
import { Model } from 'mongoose';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name) private CandidateModel: Model<Candidate>
  ){}
  async create(createCandidateDto: CreateCandidateDto) {
    try {
      const newCandidate = new this.CandidateModel(createCandidateDto);
      return newCandidate.save();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async findAll() {
    try{
      return await this.CandidateModel.find();
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }

  async findByUser(user:string){
    try{
      const candidate = await this.CandidateModel.findOne({ User: user }).exec();
      if(!candidate){
        throw new  HttpException("Candidate not found", 404);
      }
      return candidate;
    }
    catch(err){
      throw new HttpException(err.message,err.status);
    }
  }
}
