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

  findAll() {
    return `This action returns all servicePackage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicePackage`;
  }

  update(id: number, updateServicePackageDto: UpdateServicePackageDto) {
    return `This action updates a #${id} servicePackage`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicePackage`;
  }
}
