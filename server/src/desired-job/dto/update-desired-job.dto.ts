import { PartialType } from '@nestjs/mapped-types';
import { CreateDesiredJobDto } from './create-desired-job.dto';

export class UpdateDesiredJobDto extends PartialType(CreateDesiredJobDto) {}
