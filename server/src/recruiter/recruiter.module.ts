import { Module, forwardRef } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { RecruiterController } from './recruiter.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from 'src/company/entities/company.entity';

import { CompanyModule } from 'src/company/company.module';
import { RecruiterSchema } from './entities/recruiter.entity';
import { UserSchema } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { VoucherSchema } from 'src/voucher/entities/voucher.entity';
import { VoucherModule } from 'src/voucher/voucher.module';
import { StorageSchema } from 'src/storage/entities/storage.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Recruiter', schema: RecruiterSchema},
      {name:'Company', schema: CompanySchema},
      {name:'User', schema: UserSchema},
      {name:'Voucher', schema: VoucherSchema},
      {name:'Storage', schema: StorageSchema}
    ]),
    forwardRef(() => CompanyModule),
    forwardRef(() => UserModule),
    forwardRef(() => VoucherModule)
  ],
  controllers: [RecruiterController],
  providers: [RecruiterService],
  exports: [RecruiterService]
})
export class RecruiterModule {}
