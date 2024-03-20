import { Module, forwardRef } from '@nestjs/common';
import { CandidateLanguageService } from './candidate-language.service';
import { CandidateLanguageController } from './candidate-language.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateLanguageSchema } from './entities/candidate-language.entity';
import { LanguageModule } from 'src/language/language.module';
import { LanguageSchema } from 'src/language/entities/language.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:'CandidateLanguage',
        schema: CandidateLanguageSchema
      },
      {
        name:'Language',
        schema: LanguageSchema
      
      }
    ]),
    forwardRef(()=>LanguageModule)
  ],
  controllers: [CandidateLanguageController],
  providers: [CandidateLanguageService],
  exports: [CandidateLanguageService],
})
export class CandidateLanguageModule {}
