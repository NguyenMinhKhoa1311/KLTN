import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CandidateModule } from './candidate/candidate.module';
import { FieldModule } from './field/field.module';
import { DesiredJobModule } from './desired-job/desired-job.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { CompanyModule } from './company/company.module';
import { CareerModule } from './career/career.module';
import { ServicePackage } from './service-package/entities/service-package.entity';
import { VoucherModule } from './voucher/voucher.module';
import { BillModule } from './bill/bill.module';
import { JobModule } from './job/job.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { StorageModule } from './storage/storage.module';
import { EducationModule } from './education/education.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { SendMailModule } from './send-mail/send-mail.module';
import { SkillModule } from './skill/skill.module';
import { ReferencesModule } from './references/references.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { JobController } from './job/job.controller';
import { FieldController } from './field/field.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nguyenminhkhoa1311:cn4ABLLOwrbH4m4z@cluster0.bj8qqej.mongodb.net/'),
    UserModule,
    CandidateModule,
    FieldModule,
    DesiredJobModule,
    RecruiterModule,
    CompanyModule,
    CareerModule,
    ServicePackage,
    VoucherModule,
    BillModule,
    JobModule,
    RecruitmentModule,
    StorageModule,
    EducationModule,
    WorkExperienceModule,
    SendMailModule,
    SkillModule,
    ReferencesModule,
    AuthModule,



  ],
  controllers: [AppController],
  providers: [AppService],
})
 //export class AppModule {} //no middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Áp dụng middleware cho tất cả các đường dẫn ngoại trừ '/public'
    consumer
      .apply(AuthMiddleware)
      .exclude(

        { path: 'job/getAllAndSort', method: RequestMethod.GET },
        { path: 'job/getAll', method: RequestMethod.GET },
        { path: 'job/getAllAndSortWithUrgent', method: RequestMethod.GET },
        { path: 'job/getByField', method: RequestMethod.GET },
        { path: 'job/getByFieldWithUrgent', method: RequestMethod.GET },
        { path: 'job/getByCareer', method: RequestMethod.GET },
        { path: 'job/getByPriority', method: RequestMethod.GET },
        { path: 'job/getByHotJob', method: RequestMethod.GET },
        { path: 'job/getById', method: RequestMethod.GET },
        { path: 'job/getByFieldName', method: RequestMethod.GET },
        { path: 'job/geAllAndSortByWelFareAndSalare', method: RequestMethod.GET },
        { path: 'job/getByFieldNameWithUrgent', method: RequestMethod.GET },
        { path: 'job/getByCareerName', method: RequestMethod.GET },
        { path: 'job/getByCareerNameWithUrgent', method: RequestMethod.GET },
        { path: 'job/getByCompany', method: RequestMethod.GET },
        { path: 'job/getByNameWithKeyword', method: RequestMethod.GET },
        { path: 'job/ByKeyword', method: RequestMethod.GET },
        { path: 'job/ByKeywordWithUrgent', method: RequestMethod.GET },
        { path: 'job/getByTagsWithKeyword', method: RequestMethod.GET },
        { path: 'job/getByTagsWithKeywordAndUrgent', method: RequestMethod.GET },
        { path: 'job/getByRecruiter', method: RequestMethod.GET },



      )
      .forRoutes(
        JobController,
        
      )
      ;
  }
} // with middleware
