import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get('all')
  findAll() {
    return this.adminService.findAll();
  }

  @Get('byUser')
  findByUser(@Query('user') email: string) {
    return this.adminService.findByUser(email);
  }

  @Get('getBy_id')
  findOne(@Query('id') id: string) {
    return this.adminService.findBy_id(id);
  }
}
