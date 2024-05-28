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
    
    @Cron('0 54 19 * * *')
    //@Cron('15 * * * * *')
    async handleCron() {
        const allUsers = await this.getAllUser();
        const jobBackUp = await this.jobService.getAllAndSort(0,5);
        // Tạo HTML content
        let htmlContentOfJobBackUp = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>';
        jobBackUp.forEach(job => {
        htmlContentOfJobBackUp += `
            <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px;">
            <h2>${job.Name}</h2>
            <p><strong>Địa điểm:</strong> ${job.Location.join(', ')}</p>
            <p><strong>Mức lương:</strong> ${job.Salary}</p>
            <p><strong>Phúc lợi:</strong></p>
            <ul>
            ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
            </ul>
            <p><strong>Mô tả công việc:</strong></p>
            <p>${job.Description.replace(/\n/g, '<br>')}</p>
            <p><strong>Thời gian bắt đầu:</strong> ${job.StartDate.toDateString()}</p>
            <p><strong>Thời gian kết thúc:</strong> ${job.EndDate.toDateString()}</p>
            <p><strong>Tags:</strong> ${job.Tags.join(', ')}</p>
            </div>
            `;
            });
        const jobBackupdata = this.converToJob(jobBackUp);
        allUsers.forEach(async (user) => {
            log(user.Field)
            const job = await  this.jobService.getByField(0,5,user.Field.toString());
            const jobData = this.converToJob(job);
            if(job.length>0){
                log('job by field of user' + user.Field + user.Email)
                log(job.length)
                log(jobData)
                // Tạo HTML content
                let htmlContent = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>';
                job.forEach(job => {
                htmlContent += `
                    <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px;">
                    <h2>${job.Name}</h2>
                    <p><strong>Địa điểm:</strong> ${job.Location.join(', ')}</p>
                    <p><strong>Mức lương:</strong> ${job.Salary}</p>
                    <p><strong>Phúc lợi:</strong></p>
                    <ul>
                    ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                    <p><strong>Mô tả công việc:</strong></p>
                    <p>${job.Description.replace(/\n/g, '<br>')}</p>
                    <p><strong>Thời gian bắt đầu:</strong> ${job.StartDate.toDateString()}</p>
                    <p><strong>Thời gian kết thúc:</strong> ${job.EndDate.toDateString()}</p>
                    <p><strong>Tags:</strong> ${job.Tags.join(', ')}</p>
                    </div>
                    `;
                });
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
                log(jobBackupdata)
                log('job by field of user' + user.Field + user.Email)
                log(job.length)
                log(jobData)
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

        this.logger.log('Called when the second is 45');
    }


}
