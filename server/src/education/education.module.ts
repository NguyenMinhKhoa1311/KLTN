import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EducationSchema } from './entities/education.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:'Education',
        schema: EducationSchema
      }
    ])
  ],
  controllers: [EducationController],
  providers: [EducationService],
  exports: [EducationService],
})
export class EducationModule {}
