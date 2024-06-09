import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Ban } from '../../models/ban.model';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  constructor(private httpClient: HttpClient) {}

  create(ban: any){
    console.log(ban);
    
    return this.httpClient.post<boolean>(`${URL}/ban/create`, ban);
  }
  delete(ban: any){
    return this.httpClient.delete<boolean>(`${URL}/ban/delete`, ban);
  }
}
