import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { ServicePackageService } from './service-package.service';
import { CreateServicePackageDto } from './dto/create-service-package.dto';
import { UpdateServicePackageDto } from './dto/update-service-package.dto';


@Controller('service-package')
export class ServicePackageController {
  constructor(private readonly servicePackageService: ServicePackageService) {}

  @Post('create')
  async create(@Body() createServicePackageDto: CreateServicePackageDto) {
    try {
      const servicePackage = await this.servicePackageService.create(createServicePackageDto);
      return servicePackage;
    }
    catch(error){
      throw error;
    }
  }

  @Get('getAll')
  findAll() {
    return this.servicePackageService.getAll();
  }
}
