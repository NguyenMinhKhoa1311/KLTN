import { Injectable } from '@nestjs/common';
import { CreateTokenResetPasswordDto } from './dto/create-token-reset-password.dto';
import { UpdateTokenResetPasswordDto } from './dto/update-token-reset-password.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TokenResetPassword } from './entities/token-reset-password.entity';
import { Model } from 'mongoose';
import { log } from 'console';

@Injectable()
export class TokenResetPasswordService {
  [x: string]: any;
  constructor(
    @InjectModel(TokenResetPassword.name) private referenceModel: Model<TokenResetPassword>,
  ){}
  async create(createTokenResetPasswordDto: CreateTokenResetPasswordDto) {
    try {
      const createdTokenResetPassword = new this.referenceModel(createTokenResetPasswordDto);
      const newToken = await createdTokenResetPassword.save();
      if(newToken._id){
        return newToken;
      } else {
        return {
          _id: '500',
          error: 'Token not created'
        }
      }
    } catch (error) {
      return {
        _id: '500',
        error: error.message
      }
    }
  }

}
