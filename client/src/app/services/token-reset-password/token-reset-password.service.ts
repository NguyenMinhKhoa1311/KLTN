import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResetPassword } from '../../models/token-reset-password';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root' 
})
export class TokenResetPasswordService {

  constructor(private httpClient: HttpClient) {}

  create(tokenResetPassword: any){
    console.log(tokenResetPassword,`${URL}token-reset-password/create`);
    return this.httpClient.post<TokenResetPassword>(`${URL}/token-reset-password/create`, tokenResetPassword);
  }
}
