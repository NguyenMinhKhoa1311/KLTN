import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { log } from 'console';
import { CronJob } from 'cron';
import { Model, Types } from 'mongoose';
import { CandidateService } from 'src/candidate/candidate.service';
import { Job } from 'src/job/entities/job.entity';
import { JobService } from 'src/job/job.service';
import { MailOptions } from 'src/send-mail/dto/mail-options.dto';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { UserService } from 'src/user/user.service';
import { CronJobOfServer } from './entities/cron-job.entity';
import {getFormat1,getFormat2,getFormat3} from './format/format'
import { CreateCronJobDto } from './dto/create-cron-job.dto';

@Injectable()
export class CronJobService {
    private readonly logger = new Logger(CronJobService.name);
    private cronJob: CronJob;

    constructor(
        @InjectModel(CronJobOfServer.name) private cronJobModel: Model<CronJobOfServer>,
        private readonly jobService: JobService,
        private readonly sendMailService: SendMailService,
        private readonly candidateService: CandidateService,
    ) {
        this.initCronJob('0 40 19 * * *',1);
    }
    private initCronJob(cronTime: string, format: number) {
        if (this.cronJob) {
          this.cronJob.stop(); // Dừng cron job cũ nếu tồn tại
        }
    
        this.cronJob = new CronJob(cronTime, async () => {
            await this.handleCron(format);
        });
    
        this.cronJob.start();
        log(`Cron job scheduled with time: ${cronTime}`);
    }

    async createCronJob(createCronJobDto: CreateCronJobDto) {
        const newCronJob = await new this.cronJobModel(createCronJobDto).save();
        return newCronJob;
    }
    async getCronJob() {
        const cronJob = await this.cronJobModel.findById("665ff2f47a8ea818a9d105d4");
        return cronJob;
    }
    async updateCronJobInDB(cronTime: string,format: number) {
        try{
            const newCronJob = await this.cronJobModel.findByIdAndUpdate("665ff2f47a8ea818a9d105d4", { cronTime,format }, { new: true });
            if(newCronJob._id){
                return newCronJob;
            }else return {
                _id:"500"
            }
        }catch(error){
            log("loi"+ error);
            return{
                _id:"500",
                error:error
            }
        }
    }
    async updateCronJob(cronTime: string,format: number) {
        log(`Updating cron job to run at ${cronTime}`);
        const newCronJob = await this.updateCronJobInDB(cronTime,format);
        if(newCronJob._id!="500"){
            log(`Updating cron job to run at ${cronTime}`);
            this.initCronJob(cronTime,format);
            return true
        }
        else return false

    }
    
    async getAllUser() {
        try {
            let allUsers = await this.candidateService.findAllNoPopulate();
          const users = allUsers.map(({ Email ,Field ,Career }) => {return{ Email ,Field ,Career }}); // Use await to wait for users
            return users;
        } catch (error) {
            return []
        }
    }
    converToJob(job){
        const jobs = job.map(({ Name, Description, Adrress, Location, Salary, Welfare, Career, Field, StartDate, EndDate, Tags}) => {return{ Name, Description, Adrress, Location, Salary, Welfare, Career, Field, StartDate, EndDate, Tags }}); // Use await to wait for users
        return jobs;
    }
    async handleCron(format: number) {
        const allUsers = await this.getAllUser();
        const jobBackUp = await this.jobService.getAllAndSort(0,5);
        // Tạo HTML content
        let htmlContentOfJobBackUp: string;
        if (format === 1) {
            htmlContentOfJobBackUp = getFormat1(jobBackUp);
        } else if (format === 2) {
            htmlContentOfJobBackUp = getFormat2(jobBackUp);
        } else if (format === 3) {
            htmlContentOfJobBackUp = getFormat3(jobBackUp);
        }
        log(format)
        log(htmlContentOfJobBackUp)
        allUsers.forEach(async (user) => {
            log(user.Field)
            const job = await  this.jobService.getByField(0,5,user.Field.toString());
            const jobData = this.converToJob(job);
            if(job.length>0){
                log('job by field of user' + user.Field + user.Email)
                log(job.length)
                //log(jobData)
                // Tạo HTML content
                let htmlContent: string;
                if (format === 1) {
                    htmlContent = getFormat1(jobData);
                } else if (format === 2) {
                    htmlContent = getFormat2(jobData);
                } else if (format === 3) {
                    htmlContent = getFormat3(jobData);
                }
                // Thiết lập mailOptions với nội dung HTML đã tạo
                let mailOptions = {
                    from: "Minh Mập",
                    to: user.Email,
                    subject: "Send Mail",
                    text: "test send mail with cron job at main server",
                    html: htmlContent
                        }
                this.sendMailService.sendMail(mailOptions);
            }else{
                log('job by backup of user' + user.Field + user.Email)
                log(jobBackUp.length)
                //log(jobBackupdata)
                // Thiết lập mailOptions với nội dung HTML đã tạo
                let mailOptions = {
                    from: "Minh Mập",
                    to: user.Email,
                    subject: "Send Mail",
                    text: "test send mail with cron job at main server",
                    html: htmlContentOfJobBackUp
                        }
                this.sendMailService.sendMail(mailOptions);
            }
        
            // let mailOptions: MailOptions = {
            //     from:"Minh Mập",
            //     to:user,
            //     subject:"Send Mail",
            //     text:"test send mail with cron job at main server",
            //     html:""
            // }
            // this.sendMailService.sendMail(mailOptions);
        });
    }


}
