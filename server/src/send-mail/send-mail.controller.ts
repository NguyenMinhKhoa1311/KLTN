import { Body, Controller, Post } from '@nestjs/common';
import { SendMailService } from './send-mail.service';
import { MailOptions } from './dto/mail-options.dto';

@Controller('send-mail')
export class SendMailController {
  constructor(private readonly sendMailService: SendMailService) {}

  @Post()
  async sendMail(@Body()mailOptions: MailOptions){
    await this.sendMailService.sendMail(mailOptions);
}
  
}
