import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokenResetPasswordService } from './token-reset-password.service';
import { CreateTokenResetPasswordDto } from './dto/create-token-reset-password.dto';
import { UpdateTokenResetPasswordDto } from './dto/update-token-reset-password.dto';
import { log } from 'console';
import { AuthService } from 'src/auth/auth.service';
import { SendMailService } from 'src/send-mail/send-mail.service';
import { CandidateService } from 'src/candidate/candidate.service';
import { Candidate } from 'src/candidate/entities/candidate.entity';

@Controller('token-reset-password')
export class TokenResetPasswordController {
  constructor(
    private readonly tokenResetPasswordService: TokenResetPasswordService,
    private readonly authService: AuthService,
    private readonly sendMailService: SendMailService,
    private readonly candidateService: CandidateService
    
  ) {}

  @Post("create")
  async create(@Body() createTokenResetPasswordDto: CreateTokenResetPasswordDto) {
    const token = await this.authService.generateToken({user: createTokenResetPasswordDto.User});
    createTokenResetPasswordDto.Token = token;
    let now = new Date();
    now.setHours(now.getHours() + 24);
    createTokenResetPasswordDto.Expires = now 
    const newToken = await this.tokenResetPasswordService.create(createTokenResetPasswordDto);
    const htmlContent = `
    <!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #0066cc;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        .header img {
            width: 150px;
        }
        .content {
            padding: 20px;
        }
        .content p {
            margin: 10px 0;
            line-height: 1.6;
        }
        .content a {
            color: #0066cc;
            text-decoration: none;
        }
        .footer {
            background-color: #f9f9f9;
            color: #333;
            text-align: center;
            padding: 10px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://www.vietnamworks.com/favicon.ico" alt="VietnamWorks Logo">
        </div>
        <div class="content">
            <p>Chào ${createTokenResetPasswordDto.User},</p>
            <p>Đây là email giúp bạn tạo mật khẩu mới cho tài khoản trên VietnamWorks. Vui lòng <a href="http://localhost:4200/forgot-pass?token=${token}">click vào đây</a> để tạo mật khẩu mới.</p>
            <p><strong>Lưu ý:</strong> Nếu bạn không gửi yêu cầu đến chúng tôi, vui lòng bỏ qua email này.</p>
        </div>
        <div class="footer">
            <p>Thân mến,<br>
            Phòng Dịch Vụ Khách Hàng<br>
        </div>
    </div>
</body>
</html>`
    if(newToken._id){
      let mailOptions = {
        from: "Minh Mập",
        to: createTokenResetPasswordDto.User,
        subject: "Send Mail",
        text: "test send mail with cron job at main server",
        html: htmlContent
            }
      const sentEmailInfo = await this.sendMailService.sendMail(mailOptions)
      if(sentEmailInfo){
        return newToken
      }else{
        return {
          _id: '500'
        }
      }
    }else{
      return {
        _id: '500'
      }
    }
  }
}
