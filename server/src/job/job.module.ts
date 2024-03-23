import { Module, forwardRef } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { FieldSchema } from 'src/field/entities/field.entity';
import { CareerSchema } from 'src/career/entities/career.entity';
import { FieldModule } from 'src/field/field.module';
import { CareerModule } from 'src/career/career.module';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { JobSchema } from './entities/job.entity';
import { ServicePackageModule } from 'src/service-package/service-package.module';
import { ServicePackageSchema } from 'src/service-package/entities/service-package.entity';
import { RecruitmentSchema } from 'src/recruitment/entities/recruitment.entity';
import { RecruitmentModule } from 'src/recruitment/recruitment.module';


@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Job', schema: JobSchema },
      { name:'Field',schema: FieldSchema},
      { name:'Career',schema:CareerSchema},
      { name: 'Recruiter',schema:RecruiterSchema},
      { name: 'Recruitment', schema: RecruitmentSchema},
      {name: 'ServicePackage', schema: ServicePackageSchema}
    ]),
    forwardRef(() => FieldModule),
    forwardRef(() => CareerModule),
    forwardRef(() => RecruiterModule),
    forwardRef(() => ServicePackageModule),
    forwardRef(() => RecruitmentModule)
  ],
  controllers: [JobController],
  providers: [JobService],
  exports:[JobService]
})
export class JobModule {}
