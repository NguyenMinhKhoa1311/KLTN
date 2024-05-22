import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Query } from '@nestjs/common';
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
      if(servicePackage._id.toString().length > 0){
        return servicePackage;
      }
      else{
        return{
          _id: '500',
        }
      }
    }
    catch(error){
      return{
        _id: '500',
        error: error
      }
    }
  }

  @Get('getAll')
  findAll() {
    return this.servicePackageService.getAll();
  }
  @Get('getById')
  async getById(@Query("id") id: string) {
    try{      
      const servicePackage = await this.servicePackageService.getById(id);
      if(servicePackage._id){
        return servicePackage;
      }
      else{
        return{
          _id: '500',
        }
      }
    }
    catch(error){
      return{
        _id: '500',
        error: error
      }
    }
  }
}
