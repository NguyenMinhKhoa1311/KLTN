import { Module, forwardRef } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerSchema } from './entities/career.entity';
import { FieldSchema } from 'src/field/entities/field.entity';
import { FieldModule } from 'src/field/field.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Career', schema: CareerSchema},
      { name: 'Field', schema: FieldSchema}
    ]),
    forwardRef(()=>FieldModule)
  ],
  controllers: [CareerController],
  providers: [CareerService],
  exports:[CareerService]
})
export class CareerModule {}
