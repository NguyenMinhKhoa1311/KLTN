import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Candidate } from '../../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpClient: HttpClient) {}

  getByUser(user: string){
    return this.httpClient.get<Candidate | any>(`${URL}/candidate/getByUser?user=${user}`);
  }

  create(candidate: any){
    return this.httpClient.post<Candidate>(`${URL}/candidate/create`, candidate);
  }

  updateEducation(education: any,id:string){
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateEducation?id=${id}`, education);
  }
  updateWorkExperience(workExperience: any,id:string){
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateWorkExperience?id=${id}`, workExperience);
  }
  updateLanguage(language: string,id:string){
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateLanguage?id=${id}&language=${language}`,{});
  }
  updateDesiredJob(desiredJob: any,id:string){
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateDesiredJob?id=${id}`, desiredJob);
  }
}
