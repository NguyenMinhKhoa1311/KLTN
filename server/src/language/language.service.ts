import { HttpException, Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Language } from './entities/language.entity';
import { Model } from 'mongoose';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language.name) private languageModel: Model<Language>){}
  async create(createLanguageDto: CreateLanguageDto) {
    try{
      const newLanguage = new this.languageModel(createLanguageDto);
      return newLanguage.save();
    }
    catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  findAll() {
    return `This action returns all language`;
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
