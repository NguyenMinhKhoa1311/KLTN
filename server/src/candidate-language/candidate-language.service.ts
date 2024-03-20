import { HttpException, Injectable } from '@nestjs/common';
import { CreateCandidateLanguageDto } from './dto/create-candidate-language.dto';
import { UpdateCandidateLanguageDto } from './dto/update-candidate-language.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CandidateLanguage } from './entities/candidate-language.entity';

@Injectable()
export class CandidateLanguageService {
  constructor(@InjectModel('CandidateLanguage') private candidateLanguageModel: Model<CandidateLanguage>) {}
  async create(createCandidateLanguageDto: CreateCandidateLanguageDto) {
    try {
      const candidateLanguage = new this.candidateLanguageModel(createCandidateLanguageDto);
      return await candidateLanguage.save();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  findAll() {
    return `This action returns all candidateLanguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidateLanguage`;
  }

  update(id: number, updateCandidateLanguageDto: UpdateCandidateLanguageDto) {
    return `This action updates a #${id} candidateLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidateLanguage`;
  }
}
