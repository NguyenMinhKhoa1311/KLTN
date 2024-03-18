import { Module, forwardRef } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { FieldSchema } from 'src/field/entities/field.entity';
import { MongooseModule } from '@nestjs/mongoose';

import { FieldModule } from 'src/field/field.module';
import { CompanySchema } from './entities/company.entity';
import { StorageSchema } from 'src/storage/entities/storage.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema},
      { name: 'Field', schema: FieldSchema },
      { name: 'Storage', schema: StorageSchema}
    ]),
    forwardRef(() => FieldModule)
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService]
})
export class CompanyModule {}
