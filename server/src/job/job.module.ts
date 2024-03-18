import { Module, forwardRef } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { FieldSchema } from 'src/field/entities/field.entity';
import { CareerSchema } from 'src/career/entities/career.entity';
import { CompanySchema } from 'src/company/entities/company.entity';
import { FieldModule } from 'src/field/field.module';
import { CareerModule } from 'src/career/career.module';
import { CompanyModule } from 'src/company/company.module';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { JobSchema } from './entities/job.entity';
import { TagSchema } from 'src/tag/entities/tag.entity';
import { TagModule } from 'src/tag/tag.module';
import { ServicePackageModule } from 'src/service-package/service-package.module';
import { ServicePackageSchema } from 'src/service-package/entities/service-package.entity';


@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'Job', schema: JobSchema },
      { name:'Field',schema: FieldSchema},
      { name:'Career',schema:CareerSchema},
      { name: 'Company',schema:CompanySchema},
      { name: 'Recruiter',schema:RecruiterSchema},
      { name: 'Tag',schema:TagSchema},
      {name: 'Servicepackage', schema: ServicePackageSchema}
    ]),
    forwardRef(() => FieldModule),
    forwardRef(() => CareerModule),
    forwardRef(() => CompanyModule),
    forwardRef(() => RecruiterModule),
    forwardRef(() => TagModule),
    forwardRef(() => ServicePackageModule)
  ],
  controllers: [JobController],
  providers: [JobService],
  exports:[JobService]
})
export class JobModule {}
