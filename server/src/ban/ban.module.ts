import { Module, forwardRef } from '@nestjs/common';
import { BanService } from './ban.service';
import { BanController } from './ban.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { BanSchema } from './entities/ban.entity';
import { CandidateSchema } from 'src/candidate/entities/candidate.entity';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { CandidateModule } from 'src/candidate/candidate.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Ban', schema: BanSchema},
      {name: 'Candidate', schema: CandidateSchema},
      {name: 'Recruiter', schema: RecruiterSchema}
    ]),
    forwardRef(() => BanModule),
    forwardRef(() => CandidateModule),
    forwardRef(() => RecruiterModule)
  ],
  controllers: [BanController],
  providers: [BanService],
  exports: [BanService]
})

export class BanModule {}
