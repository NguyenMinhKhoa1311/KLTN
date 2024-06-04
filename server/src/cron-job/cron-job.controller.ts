import { Controller, Post, Body } from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';

@Controller('cron-job')
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}

  @Post('update')
  updateCronJob(@Body() updateCronDto: UpdateCronJobDto) {
    return this.cronJobService.updateCronJob(updateCronDto.cronTime, updateCronDto.format);
  }
}
