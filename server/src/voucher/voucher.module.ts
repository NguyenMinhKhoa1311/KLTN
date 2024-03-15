import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VoucherSchema } from './entities/voucher.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Voucher', schema: VoucherSchema}
    ])
  ],
  controllers: [VoucherController],
  providers: [VoucherService],
  exports: [VoucherService]
})
export class VoucherModule {}
