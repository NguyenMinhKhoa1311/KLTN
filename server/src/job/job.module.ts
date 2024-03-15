import { Module, forwardRef } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { FieldSchema } from 'src/field/entities/field.entity';
import { CareerSchema } from 'src/career/entities/career.entity';
import { ServicePackageSchema } from 'src/service-package/entities/service-package.entity';
import { CompanySchema } from 'src/company/entities/company.entity';
import { FieldModule } from 'src/field/field.module';
import { CareerModule } from 'src/career/career.module';
import { ServicePackageModule } from 'src/service-package/service-package.module';
import { CompanyModule } from 'src/company/company.module';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { CandidateSchema } from 'src/candidate/entities/candidate.entity';
import { CandidateModule } from 'src/candidate/candidate.module';
import { JobSchema } from './entities/job.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Job', schema: JobSchema },
      { name:'Field',schema: FieldSchema},
      { name:'Career',schema:CareerSchema},
      { name: 'ServicePackage',schema:ServicePackageSchema},
      { name: 'Company',schema:CompanySchema},
      { name: 'Recruiter',schema:RecruiterSchema},
    ]),
    forwardRef(() => FieldModule),
    forwardRef(() => CareerModule),
    forwardRef(() => ServicePackageModule),
    forwardRef(() => CompanyModule),
    forwardRef(() => RecruiterModule),
  ],
  controllers: [JobController],
  providers: [JobService],
  exports:[JobService]
})
export class JobModule {}
