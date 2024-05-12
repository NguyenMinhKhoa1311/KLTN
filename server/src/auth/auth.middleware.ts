// auth.middleware.ts
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  async use(req: any, res: any, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      const isValid = await this.authService.validateToken(token);
      console.log(isValid);
      
      if (isValid) {
        req.user = isValid;
        const user = await this.userService.getByUserNameAndPassword(req.user.username, req.user.password);
        console.log(user);
        if(user._id!= "404 user not found"){
          req.user = user;
          next();
        } else {
          throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
        }
      }else{
        throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
      }

    }else{
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }

  }
}