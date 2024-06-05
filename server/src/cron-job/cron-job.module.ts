import { Module, forwardRef } from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { JobModule } from 'src/job/job.module';
import { SendMailModule } from 'src/send-mail/send-mail.module';
import { UserModule } from 'src/user/user.module';
import { CandidateModule } from 'src/candidate/candidate.module';
import { CronJobController } from './cron-job.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CronJobOfServerSchema } from './entities/cron-job.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CronJobOfServer', schema: CronJobOfServerSchema },
    ]),
    forwardRef(() => CronJobModule),
    forwardRef(() => JobModule),
    forwardRef(() => SendMailModule),
    forwardRef(() => CandidateModule),

  ],
  providers: [CronJobService],
  controllers: [CronJobController],
  exports: [CronJobService]
})
export class CronJobModule {}
