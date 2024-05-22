import { Module, forwardRef } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { JobModule } from 'src/job/job.module';
import { RecruiterModule } from 'src/recruiter/recruiter.module';
import { BillModule } from 'src/bill/bill.module';
import { ServicePackageModule } from 'src/service-package/service-package.module';
import { VoucherModule } from 'src/voucher/voucher.module';
import { FieldModule } from 'src/field/field.module';
import { CareerModule } from 'src/career/career.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    forwardRef(() => BillModule),
    forwardRef(() => JobModule),
    forwardRef(() => ServicePackageModule),
    forwardRef(() => VoucherModule),
    forwardRef(() => RecruiterModule),
    forwardRef(() => FieldModule),
    forwardRef(() => CareerModule),
    forwardRef(() => CompanyModule),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
