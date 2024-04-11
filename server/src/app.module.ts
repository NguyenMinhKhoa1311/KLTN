import { Module } from '@nestjs/common';
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



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
