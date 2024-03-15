import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerSchema } from './entities/career.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Career', schema: CareerSchema},
    ])
  ],
  controllers: [CareerController],
  providers: [CareerService],
  exports:[CareerService]
})
export class CareerModule {}
