import { Body, Controller, Post } from '@nestjs/common';
import { SendMailService } from './send-mail.service';
import { MailOptions } from './dto/mail-options.dto';

@Controller('send-mail')
export class SendMailController {
  constructor(private readonly sendMailService: SendMailService) {}

  @Post()
  async sendMail(@Body()mailOptions: MailOptions){
    const sentEmailInfo = await this.sendMailService.sendMail(mailOptions);
    console.log('Email sent successfully:', sentEmailInfo);
    if(sentEmailInfo){
      return true
    }
    else{
      return false
    }
}
  
}
