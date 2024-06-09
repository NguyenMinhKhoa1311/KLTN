import { Module, forwardRef } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/entities/user.entity';
import { DesiredJobSchema } from 'src/desired-job/entities/desired-job.entity';
import { DesiredJobModule } from 'src/desired-job/desired-job.module';
import { UserModule } from 'src/user/user.module';
import { CandidateSchema } from './entities/candidate.entity';
import { CareerSchema } from 'src/career/entities/career.entity';
import { CareerModule } from 'src/career/career.module';
import { FieldSchema } from 'src/field/entities/field.entity';
import { FieldModule } from 'src/field/field.module';
import { StorageSchema } from 'src/storage/entities/storage.entity';
import { JobSchema } from 'src/job/entities/job.entity';
import { EducationSchema } from 'src/education/entities/education.entity';
import { WorkExperienceSchema } from 'src/work-experience/entities/work-experience.entity';

import { StorageModule } from 'src/storage/storage.module';
import { JobModule } from 'src/job/job.module';
import { EducationModule } from 'src/education/education.module';
import { WorkExperienceModule } from 'src/work-experience/work-experience.module';
import { SkillSchema } from 'src/skill/entities/skill.entity';
import { SkillModule } from 'src/skill/skill.module';
import { ReferencesSchema } from 'src/references/entities/reference.entity';
import { ReferencesModule } from 'src/references/references.module';
import { BanModule } from 'src/ban/ban.module';



@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Candidate', schema: CandidateSchema},
      {name: 'User', schema: UserSchema},
      {name: 'DesiredJob', schema: DesiredJobSchema},
      {name: 'Career', schema: CareerSchema},
      {name: 'Field', schema: FieldSchema},
      {name: 'Storage', schema: StorageSchema},
      {name: 'Job', schema: JobSchema},
      {name: 'Education', schema: EducationSchema},
      {name: 'WorkExperience', schema: WorkExperienceSchema},
      {name: 'Skill', schema: SkillSchema},
      {name: 'Reference', schema: ReferencesSchema}
    ]),
    forwardRef(() => DesiredJobModule),
    forwardRef(() => UserModule),
    forwardRef(() => CareerModule),
    forwardRef(() => FieldModule),
    forwardRef(() => StorageModule),
    forwardRef(() => JobModule),
    forwardRef(() =>EducationModule),
    forwardRef(() => WorkExperienceModule),
    forwardRef(() => SkillModule),
    forwardRef(() => ReferencesModule ),
    forwardRef(() => BanModule)

  ],
  controllers: [CandidateController],
  providers: [CandidateService],
  exports: [CandidateService],
})
export class CandidateModule {}
