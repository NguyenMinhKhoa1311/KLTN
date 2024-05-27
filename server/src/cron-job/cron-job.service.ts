import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { log } from 'console';
import { CandidateService } from 'src/candidate/candidate.service';
import { JobService } from 'src/job/job.service';
import { MailOptions } from 'src/send-mail/dto/mail-options.dto';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CronJobService {
    private readonly logger = new Logger(CronJobService.name);
    

    constructor(
        private readonly jobService: JobService,
        private readonly sendMailService: SendMailService,
        private readonly candidateService: CandidateService,
    ) {
        
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
    
    //@Cron('0 30 11 * * *')
    @Cron('15 * * * * *')
    async handleCron() {
        const allUsers = await this.getAllUser();
        const jobBackUp = await this.jobService.getAllAndSort(0,5);
        const jobBackupdata = this.converToJob(jobBackUp);
        allUsers.forEach(async (user) => {
            log(user.Field)
            const job = await  this.jobService.getByField(0,5,user.Field.toString());
            const jobData = this.converToJob(job);
            if(job.length>0){
                log('job by field of user' + user.Field + user.Email)
                log(job.length)
                log(jobData)
            }else{
                log('job by backupof user' + user.Field + user.Email)
                log(jobBackUp.length)
                log(jobBackupdata)
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

        this.logger.log('Called when the second is 45');
    }


}
