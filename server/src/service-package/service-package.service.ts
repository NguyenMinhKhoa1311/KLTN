import { HttpException, Injectable } from '@nestjs/common';
import { CreateServicePackageDto } from './dto/create-service-package.dto';
import { UpdateServicePackageDto } from './dto/update-service-package.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ServicePackage } from './entities/service-package.entity';
import { Model } from 'mongoose';

@Injectable()
export class ServicePackageService {

  constructor(
    @InjectModel(ServicePackage.name) private ServicePackageModel: Model<ServicePackage>
  ){}
  async create(createServicePackageDto: CreateServicePackageDto) {
    try{
      const newServicePackage = new this.ServicePackageModel(createServicePackageDto);

      return newServicePackage.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getAll() {
    return this.ServicePackageModel.find();
  }
}
