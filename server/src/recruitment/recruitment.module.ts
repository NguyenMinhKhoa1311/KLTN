import { Module, forwardRef } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
import { RecruitmentController } from './recruitment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecruitmentSchema } from './entities/recruitment.entity';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { CandidateSchema } from 'src/candidate/entities/candidate.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { CandidateModule } from 'src/candidate/candidate.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Recruitment', schema: RecruitmentSchema},
      { name: 'Recruiter', schema: RecruiterSchema},
      { name: 'Candidate', schema: CandidateSchema}
    ]),
    forwardRef( ()=> RecruitmentModule),
    forwardRef(() => RecruiterModule),
    forwardRef(() => CandidateModule)
  ],
  controllers: [RecruitmentController],
  providers: [RecruitmentService],
  exports: [RecruitmentService]
})
export class RecruitmentModule {}
