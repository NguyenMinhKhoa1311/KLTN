import { Module, forwardRef } from '@nestjs/common';
import { DesiredJobService } from './desired-job.service';
import { DesiredJobController } from './desired-job.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { FieldSchema } from 'src/field/entities/field.entity';
import { FieldModule } from 'src/field/field.module';
import { DesiredJobSchema } from './entities/desired-job.entity';
import { CareerSchema } from 'src/career/entities/career.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DesiredJob', schema: DesiredJobSchema},
     ]),
     forwardRef(()=>FieldModule)
  ],
  controllers: [DesiredJobController],
  providers: [DesiredJobService],
  exports: [DesiredJobService],
})
export class DesiredJobModule {}
