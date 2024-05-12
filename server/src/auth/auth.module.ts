// auth.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Thay 'your-secret-key' bằng một chuỗi bí mật thực tế
      signOptions: { expiresIn: '1d' }, // Thời hạn của token
    }),
    forwardRef(() => UserModule),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}