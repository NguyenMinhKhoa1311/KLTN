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


@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'Bill', schema: BillSchema},
      {name: 'Job', schema: JobSchema},
      {name: 'ServicePackage', schema: ServicePackageSchema},
      {name: 'Voucher', schema: VoucherSchema}
    ]),
    forwardRef(() => JobModule),
    forwardRef(() => ServicePackageModule),
    forwardRef(() => VoucherModule)
  ],
  controllers: [BillController],
  providers: [BillService],
  exports:[BillService]
})
export class BillModule {}
