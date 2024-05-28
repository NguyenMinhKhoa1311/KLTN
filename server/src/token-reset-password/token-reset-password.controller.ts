import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokenResetPasswordService } from './token-reset-password.service';
import { CreateTokenResetPasswordDto } from './dto/create-token-reset-password.dto';
import { UpdateTokenResetPasswordDto } from './dto/update-token-reset-password.dto';
import { log } from 'console';
import { AuthService } from 'src/auth/auth.service';

@Controller('token-reset-password')
export class TokenResetPasswordController {
  constructor(
    private readonly tokenResetPasswordService: TokenResetPasswordService,
    private readonly authService: AuthService,
  ) {}

  @Post("create")
  async create(@Body() createTokenResetPasswordDto: CreateTokenResetPasswordDto) {
    const token = await this.authService.generateToken({user: createTokenResetPasswordDto.User});
    createTokenResetPasswordDto.Token = token;
    let now = new Date();
    now.setHours(now.getHours() + 24);
    createTokenResetPasswordDto.Expires = now 
    return this.tokenResetPasswordService.create(createTokenResetPasswordDto);
  }
}
