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
    console.log(`${URL}/ban/delete`);
    
    return this.httpClient.delete<boolean>(`${URL}/ban/delete?ban=${ban._id}&user=${ban.User}&forCandidate=${ban.forCandidate}&forRecruiter=${ban.forRecruiter}`);
  }
  getByCandidate(candidate: string){
    return this.httpClient.get<Ban>(`${URL}/ban/getByCandidate?candidate=${candidate}`);
  }
  getByRecruiter(recruiter: string){
    return this.httpClient.get<Ban>(`${URL}/ban/getByRecruiter?recruiter=${recruiter}`);
  }

}
