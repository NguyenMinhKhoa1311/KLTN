import { Module, forwardRef } from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { JobModule } from 'src/job/job.module';
import { SendMailModule } from 'src/send-mail/send-mail.module';
import { UserModule } from 'src/user/user.module';
import { CandidateModule } from 'src/candidate/candidate.module';
import { CronJobController } from './cron-job.controller';


@Module({
  imports: [
    forwardRef(() => JobModule),
    forwardRef(() => SendMailModule),
    forwardRef(() => CandidateModule),

  ],
  providers: [CronJobService],
  controllers: [CronJobController],
})
export class CronJobModule {}
