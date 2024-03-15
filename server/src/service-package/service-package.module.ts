import { Module } from '@nestjs/common';
import { ServicePackageService } from './service-package.service';
import { ServicePackageController } from './service-package.controller';
import { ServicePackageSchema } from './entities/service-package.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'ServicePackage', schema: ServicePackageSchema }
    ])
  ],
  controllers: [ServicePackageController],
  providers: [ServicePackageService],
  exports: [ServicePackageService]
})
export class ServicePackageModule {}
