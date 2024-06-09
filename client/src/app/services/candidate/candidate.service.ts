import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getById(id: string) {
    return this.httpClient.get<Candidate>(`${URL}/candidate/getById?id=${id}`);
  }

  getAll(){
    return this.httpClient.get<Candidate[]>(`${URL}/candidate/getAll`);
  }

  create(candidate: any){
    return this.httpClient.post<Candidate>(`${URL}/candidate/create`, candidate);
  }

  updateEducation(education: any,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateEducation?id=${id}`, education,{ headers });
  }
  updateWorkExperience(workExperience: any,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateWorkExperience?id=${id}`, workExperience,{ headers });
  }
  updateLanguage(language: string,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateLanguage?id=${id}&language=${language}`,{},{ headers });
  }
  updateDesiredJob(desiredJob: any,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateDesiredJob?id=${id}`, desiredJob,{ headers });
  }
  updateSkill(skill: any,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateSkills?id=${id}`, skill,{ headers });
  }
  updateAvatar(id:string, storage: any,token:string){ 
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateAvatar?id=${id}`, storage,{ headers });
  }
  updateBasicInfo(basicInfo: any,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateBasicInfo?id=${id}`, basicInfo,{ headers });
  }

  deleteSkill(id: string, skill: string,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteSkills?id=${id}&skill=${skill}`,{},{ headers });
  }
  updateOneOfSkill(id: string, skill: any,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateOneOfSkill?id=${id}`, skill,{ headers });
  }
  deleteLanguage(id: string, language: string,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteLanguage?id=${id}&language=${language}`,{},{ headers });
  }
  deleteEducation(id: string, education: string,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteEducation?id=${id}&education_id=${education}`,{},{ headers });
  }
  deleteWorkExperience(id: string, workExperience: string,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteWorkExperience?id=${id}&work_experience_id=${workExperience}`,{},{ headers });
  }
  updateOneOfEucation(id: string, education: any,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateOneOfEducation?id=${id}`, education,{ headers });
  }
  updateOneOfWorkExperience(id: string, workExperience: any,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateOneOfWorkExperience?id=${id}`, workExperience,{ headers });
  }

  updateReference(id: string, references: any,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateReference?id=${id}`, references,{ headers });
  }
  updateOneOfReference(id: string, reference: any,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateOneOfReference?id=${id}`, reference,{ headers });
  }
  deleteReference(id: string, reference: string,token:string)
  {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteReference?id=${id}&reference_id=${reference}`,{},{ headers });
  }
  updateCareerGoal(id: string, careerGoal: string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/updateCareerGoal?id=${id}&career_goal=${careerGoal}`,{},{ headers });
  }

  updateFavoriteJob(id: string, job: string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/UpdateFavoriteJobs?id=${id}&job_id=${job}`,{},{ headers });
  }

  deleteFavoriteJob(id: string, job: string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Candidate>(`${URL}/candidate/DeleteFavoriteJobs?id=${id}&job_id=${job}`,{},{ headers });
  }


}
