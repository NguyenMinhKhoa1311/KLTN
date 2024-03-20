import { Module } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperienceController } from './work-experience.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkExperienceSchema } from './entities/work-experience.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:'WorkExperience',
        schema: WorkExperienceSchema
      }
    ])
  ],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService],
  exports: [WorkExperienceService],
})
export class WorkExperienceModule {}
