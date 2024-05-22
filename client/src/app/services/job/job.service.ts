import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../../models/job.model';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) {}

  getByField(field: string, page: number, limit: number) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByField?page=${page}&limit=${limit}&field=${field}`);
  }
  getByFieldWithUrgent(field: string, page: number, limit: number, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByFieldWithUrgent?page=${page}&limit=${limit}&field=${field}&urgent=${urgent}`);
  }

  getByCareer(career: string, page: number, limit: number) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareer?page=${page}&limit=${limit}&career=${career}`);
  }

  getByHotJob( page: number, limit: number) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByHotJob?page=${page}&limit=${limit}`);
  }

  getAllAndSort(page: number, limit: number) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getAllAndSort?page=${page}&limit=${limit}`);
  }
  getAllAndSortWithUrgent(page: number, limit: number, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getAllAndSortWithUrgent?page=${page}&limit=${limit}&urgent=${urgent}`);
  }

  getByFieldName( fieldName: string, page: number,limit: number) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByFieldName?fieldName=${fieldName}&page=${page}&limit=${limit}`);
  }
  getByFieldNameWithUrgent( fieldName: string, page: number,limit: number, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByFieldNameWithUrgent?fieldName=${fieldName}&page=${page}&limit=${limit}&urgent=${urgent}`);
  }
  getByCareerName(CareerName: string, page: number, limit: number) {
    console.log(CareerName);
    
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareerName?careerName=${CareerName}&page=${page}&limit=${limit}`);
  }
  getByCareerNameWithUrgent(CareerName: string, page: number, limit: number, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareerNameWithUrgent?careerName=${CareerName}&page=${page}&limit=${limit}&urgent=${urgent}`);
  }

  getByKeyWord(keyword: string, page: number, limit: number){
    return this.httpClient.get<Job[] | any>(`${URL}/job/ByKeyword?keyword=${keyword}&page=${page}&limit=${limit}`);
  }
  getByKeywordWithUrgent(keyword: string, page: number, limit: number, urgent: boolean){
    return this.httpClient.get<Job[] | any>(`${URL}/job/ByKeywordWithUrgent?keyword=${keyword}&page=${page}&limit=${limit}&urgent=${urgent}`);
  }
  getByTag(tag: string, page: number, limit: number){
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByTagsWithKeyword?keyword=${tag}&page=${page}&limit=${limit}`);
  }
  getByTagWithUrgent(tag: string, page: number, limit: number, urgent: boolean){
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByTagsWithKeywordAndUrgent?keyword=${tag}&page=${page}&limit=${limit}&urgent=${urgent}`);
  }

  getAllAndSortByWelfareAndSalary(page: number, limit: number){
    return this.httpClient.get<Job[] | any>(`${URL}/job/geAllAndSortByWelFareAndSalare?page=${page}&limit=${limit}`);
  }

  create(job:any,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.post(`${URL}/job/create`,job,{ headers });
  }

  update(job:any,id:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log(id);
    return this.httpClient.put<Job>(`${URL}/job/updateJob?id=${id}`,job,{ headers });
  }


  getByRecruiter(recruiterId:string,page:number,limit:number){
    return this.httpClient.get<Job[]>(`${URL}/job/getByRecruiter?id=${recruiterId}&page=${page}&limit=${limit}`);
  }
  getByLocation(location:string,page:number,limit:number){
    return this.httpClient.get<Job[]>(`${URL}/job/getByLocationdWithKeyword?keyword=${location}&page=${page}&limit=${limit}`);
  }
  getByLocationWithUrgent(location:string,page:number,limit:number,urgent:boolean){
    return this.httpClient.get<Job[]>(`${URL}/job/getByLocationdWithKeywordAndUrgent?keyword=${location}&page=${page}&limit=${limit}&urgent=${urgent}`);
  }

  getByCompany(companyId:string,page:number,limit:number){
    return this.httpClient.get<Job[]>(`${URL}/job/getByCompany?companyId=${companyId}&page=${page}&limit=${limit}`);
    }

  getByJobId(jobId:string){
    return this.httpClient.get<Job>(`${URL}/job/getById?id=${jobId}`);
  }


  deleteJob(jobId:string, companyId:string, fieldId:string, carrerId:string, token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.delete<Boolean>(`${URL}/job/deleteJob?id=${jobId}&carrerId=${carrerId}&fieldId=${fieldId}&companyId=${companyId}`,{ headers });
  }
  updateRecrutment(recruitment:any,jobId:string,token:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Job>(`${URL}/job/updateRecruitment?id=${jobId}`,recruitment,{ headers });
  }
}

