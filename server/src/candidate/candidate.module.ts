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

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Candidate', schema: CandidateSchema},
      {name: 'User', schema: UserSchema},
      {name: 'DesiredJob', schema: DesiredJobSchema},
      {name: 'Career', schema: CareerSchema},
      {name: 'Field', schema: FieldSchema}
    ]),
    forwardRef(() => DesiredJobModule),
    forwardRef(() => UserModule),
    forwardRef(() => CareerModule),
    forwardRef(() => FieldModule)

  ],
  controllers: [CandidateController],
  providers: [CandidateService],
  exports: [CandidateService],
})
export class CandidateModule {}
