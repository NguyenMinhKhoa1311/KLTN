import { Module, forwardRef } from '@nestjs/common';
import { TokenResetPasswordService } from './token-reset-password.service';
import { TokenResetPasswordController } from './token-reset-password.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenResetPasswordSchema } from './entities/token-reset-password.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SendMailModule } from 'src/send-mail/send-mail.module';
import { CandidateModule } from 'src/candidate/candidate.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TokenResetPassword', schema: TokenResetPasswordSchema }
    ]),
    forwardRef(() => AuthModule),
    forwardRef(() => SendMailModule),
    forwardRef(() => CandidateModule),
  ],
  controllers: [TokenResetPasswordController],
  providers: [TokenResetPasswordService],
  exports: [TokenResetPasswordService],
})
export class TokenResetPasswordModule {}
