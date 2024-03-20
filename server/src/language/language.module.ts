import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSchema } from './entities/language.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:'Language',
        schema: LanguageSchema
      }
    ])
  ],
  controllers: [LanguageController],
  providers: [LanguageService],
  exports: [LanguageService],
})
export class LanguageModule {}
