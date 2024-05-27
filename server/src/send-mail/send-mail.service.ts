import { HttpException, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
const {EMAIL_USER, EMAIL_PASSWORD, EMAIL_HOST,EMAIL_PORT} = require('../../config/email.config');
import { MailOptions } from './dto/mail-options.dto';
import { log } from 'console';

@Injectable()
export class SendMailService {
    private readonly transporter: nodemailer.Transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
          // Cấu hình SMTP của bạn
          host: EMAIL_HOST,
          port: EMAIL_PORT,
          secure: true,
          auth: {
            user: EMAIL_USER ,
            pass:   EMAIL_PASSWORD,
          },
        });
      }
        async sendMail(mailOptions: MailOptions) {
          try{
            return await this.transporter.sendMail(mailOptions);
          }
          catch(err){
            log(err)
            return false
          }

        }
}
