import { Module, forwardRef } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSchema } from 'src/job/entities/job.entity';
import { JobModule } from 'src/job/job.module';
import { ServicePackageSchema } from 'src/service-package/entities/service-package.entity';
import { ServicePackageModule } from 'src/service-package/service-package.module';
import { VoucherSchema } from 'src/voucher/entities/voucher.entity';
import { VoucherModule } from 'src/voucher/voucher.module';
import { BillSchema } from './entities/bill.entity';
import { RecruiterSchema } from 'src/recruiter/entities/recruiter.entity';
import { RecruiterModule } from 'src/recruiter/recruiter.module';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'Bill', schema: BillSchema},
      {name: 'Job', schema: JobSchema},
      {name: 'ServicePackage', schema: ServicePackageSchema},
      {name: 'Voucher', schema: VoucherSchema},
      {name: 'Recruiter', schema: RecruiterSchema}
    ]),
    forwardRef(() => JobModule),
    forwardRef(() => ServicePackageModule),
    forwardRef(() => VoucherModule),
    forwardRef(() => RecruiterModule)
  ],
  controllers: [BillController],
  providers: [BillService],
  exports:[BillService]
})
export class BillModule {}
