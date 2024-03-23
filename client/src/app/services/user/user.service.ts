import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ URL } from '../../../environments/environments'
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserWithUserName(gmail: string){
    console.log('gọi api nè'+ gmail);
    
    return this.httpClient.get<User | any>(`${URL}/user/getByUserName/?userName=${gmail}`)
  }
  create(newUser: any){
    return this.httpClient.post<User | any>(`${URL}/user/create`, newUser)
  }
}
