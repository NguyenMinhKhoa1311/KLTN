import { Module, forwardRef } from '@nestjs/common';
import { TokenResetPasswordService } from './token-reset-password.service';
import { TokenResetPasswordController } from './token-reset-password.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenResetPasswordSchema } from './entities/token-reset-password.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TokenResetPassword', schema: TokenResetPasswordSchema }
    ]),
    forwardRef(() => AuthModule),
  ],
  controllers: [TokenResetPasswordController],
  providers: [TokenResetPasswordService],
  exports: [TokenResetPasswordService]
})
export class TokenResetPasswordModule {}
