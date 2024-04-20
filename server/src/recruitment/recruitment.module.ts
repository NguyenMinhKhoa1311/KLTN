import { Module, forwardRef } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
import { RecruitmentController } from './recruitment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecruitmentSchema } from './entities/recruitment.entity';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { CandidateSchema } from 'src/candidate/entities/candidate.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { CandidateModule } from 'src/candidate/candidate.module';
import { JobSchema } from 'src/job/entities/job.entity';
import { JobModule } from 'src/job/job.module';
import { CompanySchema } from 'src/company/entities/company.entity';
import { CompanyModule } from 'src/company/company.module';
import { CareerSchema } from 'src/career/entities/career.entity';
import { FieldSchema } from 'src/field/entities/field.entity';
import { CareerModule } from 'src/career/career.module';
import { FieldModule } from 'src/field/field.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Recruitment', schema: RecruitmentSchema},
      { name: 'Recruiter', schema: RecruiterSchema},
      { name: 'Candidate', schema: CandidateSchema},
      {name: 'Company', schema: CompanySchema},
      { name: 'Job', schema: JobSchema},
      { name: 'Career', schema: CareerSchema},
      { name: 'Field', schema: FieldSchema}
    ]),
    forwardRef( ()=> RecruitmentModule),
    forwardRef(() => RecruiterModule),
    forwardRef(() => CandidateModule),
    forwardRef(() => JobModule),
    forwardRef(() => CompanyModule),
    forwardRef(() => CareerModule),
    forwardRef(() => FieldModule)
  ],
  controllers: [RecruitmentController],
  providers: [RecruitmentService],
  exports: [RecruitmentService]
})
export class RecruitmentModule {}
