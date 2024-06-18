import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ URL } from '../../../environments/environments'
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserWithUserName(gmail: string){
    return this.httpClient.get<User | any>(`${URL}/user/getByUserName/?userName=${gmail}`)
  }
  create(newUser: any){
    return this.httpClient.post<User | any>(`${URL}/user/create`, newUser)
  }
  getUserWithUserNameAndPassword(userName: string, password: string){
    return this.httpClient.get<User | any>(`${URL}/user/getByUserNameAndPassword/?username=${userName}&password=${password}`)
  }
  changePass(token: string, password: string){
    return this.httpClient.put<User | any>(`${URL}/user/updatePassword/?token=${token}&password=${password}`, null)
  }
  changePassWithoutToken(userName: string, password: string,token: string){
    console.log(userName, password, token);
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<User | any>(`${URL}/user/updatePasswordWithoutToken/?username=${userName}&password=${password}`, null, { headers })
  }
}
