import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { log } from 'console';
import { CronJob } from 'cron';
import { Types } from 'mongoose';
import { CandidateService } from 'src/candidate/candidate.service';
import { Job } from 'src/job/entities/job.entity';
import { JobService } from 'src/job/job.service';
import { MailOptions } from 'src/send-mail/dto/mail-options.dto';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CronJobService {
    private readonly logger = new Logger(CronJobService.name);
    private cronJob: CronJob;
    //format 
    getFormat1 ( jobs: Job[]){
        let format1 = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>'
        format1 += `
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px;">Tên Công Việc</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Địa điểm</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Mức lương</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Phúc lợi</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Mô tả</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Thời gian</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Tags</th>
            </tr>
        `;
        jobs.forEach(job => {
            format1 +=  `
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Name}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Location.join(', ')}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Salary}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    <ul>
                        ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Description.replace(/\n/g, '<br>')}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    Bắt đầu: ${job.StartDate.toDateString()}<br>
                    Kết thúc: ${job.EndDate.toDateString()}
                </td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Tags.join(', ')}</td>
            </tr>
            `;
        })
        format1 += `</table>`;
        return format1;
    }
    getFormat2 ( jobs: Job[]){
        let format2 = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>';
        jobs.forEach(job => {
            format2 += `
            <div style="border: 2px solid #007BFF; border-radius: 5px; padding: 15px; margin-bottom: 15px; background-color: #F8F9FA;">
                <h2 style="color: #007BFF;">${job.Name}</h2>
                <p><strong>Địa điểm:</strong> ${job.Location.join(', ')}</p>
                <p><strong>Mức lương:</strong> ${job.Salary}</p>
                <p><strong>Phúc lợi:</strong></p>
                <ul>
                    ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
                </ul>
                <p><strong>Mô tả công việc:</strong></p>
                <p>${job.Description.replace(/\n/g, '<br>')}</p>
                <p><strong>Thời gian:</strong> ${job.StartDate.toDateString()} - ${job.EndDate.toDateString()}</p>
                <p><strong>Tags:</strong> ${job.Tags.join(', ')}</p>
            </div>
            `;
        });
        return format2;
    }
    getFormat3 ( jobs: Job[]){
        let format3 = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>';
        jobs.forEach((job, index) => {
            format3 += `
            <div style="border: 1px solid #ddd; margin-bottom: 10px;">
                <div style="background-color: #007BFF; color: white; padding: 10px; cursor: pointer;" onclick="document.getElementById('job-details-${index}').style.display = document.getElementById('job-details-${index}').style.display === 'none' ? 'block' : 'none'">
                    <h2 style="margin: 0;">${job.Name}</h2>
                </div>
                <div id="job-details-${index}" style="display: none; padding: 10px;">
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
            </div>
            `;
        });
        return format3;
    }

    constructor(
        private readonly jobService: JobService,
        private readonly sendMailService: SendMailService,
        private readonly candidateService: CandidateService,
    ) {
        this.initCronJob('0 * * * * *',1);
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

    async updateCronJob(cronTime: string,format: number) {
        log(`Updating cron job to run at ${cronTime}`);
        this.initCronJob(cronTime,format);
        return { message: `Cron job updated to run at ${cronTime}` };
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
    
    //@Cron('15 * * * * *')
    async handleCron(format: number) {
        const allUsers = await this.getAllUser();
        const jobBackUp = await this.jobService.getAllAndSort(0,5);
        // Tạo HTML content
        let htmlContentOfJobBackUp: string;
        if (format === 1) {
            htmlContentOfJobBackUp = this.getFormat1(jobBackUp);
        } else if (format === 2) {
            htmlContentOfJobBackUp = this.getFormat2(jobBackUp);
        } else if (format === 3) {
            htmlContentOfJobBackUp = this.getFormat3(jobBackUp);
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
                    htmlContent = this.getFormat1(jobData);
                } else if (format === 2) {
                    htmlContent = this.getFormat2(jobData);
                } else if (format === 3) {
                    htmlContent = this.getFormat3(jobData);
                }
                // Thiết lập mailOptions với nội dung HTML đã tạo
                let mailOptions = {
                    from: "Minh Mập",
                    to: user.Email,
                    subject: "Send Mail",
                    text: "test send mail with cron job at main server",
                    html: htmlContent
                        }
                //this.sendMailService.sendMail(mailOptions);
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
                //this.sendMailService.sendMail(mailOptions);
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
