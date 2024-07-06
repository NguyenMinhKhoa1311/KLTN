import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Ban } from '../../models/ban.model';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  constructor(private httpClient: HttpClient) {}

  create(ban: any,token: string){
    console.log(ban);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.httpClient.post<boolean>(`${URL}/ban/create`, ban, {headers});
  }
  delete(ban: any,token: string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    console.log(`${URL}/ban/delete`);
    
    return this.httpClient.delete<boolean>(`${URL}/ban/delete?ban=${ban._id}&user=${ban.User}&forCandidate=${ban.forCandidate}&forRecruiter=${ban.forRecruiter}`, {headers});
  }
  getByCandidate(candidate: string){
    return this.httpClient.get<Ban>(`${URL}/ban/getByCandidate?candidate=${candidate}`);
  }
  getByRecruiter(recruiter: string){
    return this.httpClient.get<Ban>(`${URL}/ban/getByRecruiter?recruiter=${recruiter}`);
  }

}
