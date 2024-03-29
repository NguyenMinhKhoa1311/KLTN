import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FieldSchema } from './entities/field.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
     { name: 'Field', schema: FieldSchema }
    ]),
  ],
  controllers: [FieldController],
  providers: [FieldService],
  exports: [FieldService],
})
export class FieldModule {}
