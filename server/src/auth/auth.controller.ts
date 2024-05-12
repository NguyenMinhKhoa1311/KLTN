// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;
    // Xác thực thông tin đăng nhập ở đây (ví dụ: từ cơ sở dữ liệu)
    const user = await this.userService.getByUserNameAndPassword(username, password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    // Nếu thông tin đăng nhập hợp lệ, tạo và trả về token
    const token = await this.authService.generateToken({ username: user.Username, password: user.Password});
    return { token };
  }
}
