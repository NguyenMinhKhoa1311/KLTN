import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';



@Controller('voucher')
export class VoucherController {
  constructor(private voucherService: VoucherService) {}

  @Post('create')
  async create(@Body() createVoucherDto: CreateVoucherDto) {
    try{
      const newVoucher = await this.voucherService.create(createVoucherDto)
      return newVoucher;
    }
    catch(err){
      throw err;
    }
  }

  @Get()
  findAll() {
    return this.voucherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voucherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoucherDto: UpdateVoucherDto) {
    return this.voucherService.update(+id, updateVoucherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voucherService.remove(+id);
  }
}
