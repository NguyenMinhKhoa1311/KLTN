import { Controller, Post, Body, Get } from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';

@Controller('cron-job')
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}
  @Post('create')
  createCronJob(@Body() createCronJobDto: UpdateCronJobDto) {
    return this.cronJobService.createCronJob(createCronJobDto);
  }
  @Post('update')
  updateCronJob(@Body() updateCronDto: UpdateCronJobDto) {
    return this.cronJobService.updateCronJob(updateCronDto.cronTime, updateCronDto.format);
  }
  @Get('get')
  getCronJob() {
    return this.cronJobService.getCronJob();
  }
}
