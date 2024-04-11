import { Module } from '@nestjs/common';
import { ReferencesService } from './references.service';
import { ReferencesController } from './references.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferencesSchema } from './entities/reference.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Reference', schema: ReferencesSchema }
    

    ])
  ],
  controllers: [ReferencesController],
  providers: [ReferencesService],
  exports: [ReferencesService]
})
export class ReferencesModule {}
