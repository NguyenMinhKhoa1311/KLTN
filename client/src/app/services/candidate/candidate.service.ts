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
  updateSkill(skill: string,id:string){
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateSkills?id=${id}&skill=${skill}`, {});
  }
  updateAvatar(id:string, storage: any){ 
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateAvatar?id=${id}`, storage);
  }
  updateBasicInfo(basicInfo: any,id:string){
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateBasicInfo?id=${id}`, basicInfo);
  }

  deleteSkill(id: string, skill: string)
  {
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteSkills?id=${id}&skill=${skill}`,{});
  }
  deleteLanguage(id: string, language: string)
  {
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteLanguage?id=${id}&language=${language}`,{});
  }
  deleteEducation(id: string, education: string)
  {
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteEducation?id=${id}&education_id=${education}`,{});
  }
  deleteWorkExperience(id: string, workExperience: string)
  {
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteWorkExperience?id=${id}&work_experience_id=${workExperience}`,{});
  }
  updateOneOfEucation(id: string, education: any)
  {
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateOneOfEducation?id=${id}`, education);
  }
  updateOneOfWorkExperience(id: string, workExperience: any)
  {
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateOneOfWorkExperience?id=${id}`, workExperience);
  }


}
