import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../../models/job.model';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) {}

  getByField(field: string, page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByField?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&field=${field}`);
  }
  getByFieldWithUrgent(field: string, page: number, limit: number, sortBy: string, sortOrder: string, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByField?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&field=${field}&urgent=${urgent}`);
  }

  getByCareer(career: string, page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareer?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&career=${career}`);
  }

  getByHotJob( page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByHotJob?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  getAllAndSort(page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getAllAndSort?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getAllAndSortWithUrgent(page: number, limit: number, sortBy: string, sortOrder: string, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getAllAndSortWithUrgent?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&urgent=${urgent}`);
  }

  getByFieldName( fieldName: string, page: number,limit: number,  sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByFieldName?fieldName=${fieldName}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByFieldNameWithUrgent( fieldName: string, page: number,limit: number,  sortBy: string, sortOrder: string, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByFieldNameWithUrgent?fieldName=${fieldName}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&urgent=${urgent}`);
  }
  getByCareerName(CareerName: string, page: number, limit: number, sortBy: string, sortOrder: string) {
    console.log(CareerName);
    
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareerName?careerName=${CareerName}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByCareerNameWithUrgent(CareerName: string, page: number, limit: number, sortBy: string, sortOrder: string, urgent: boolean) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareerNameWithUrgent?careerName=${CareerName}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&urgent=${urgent}`);
  }

  getByKeyWord(keyword: string, page: number, limit: number, sortBy: string, sortOrder: string){
    return this.httpClient.get<Job[] | any>(`${URL}/job/ByKeyword?keyword=${keyword}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByKeywordWithUrgent(keyword: string, page: number, limit: number, sortBy: string, sortOrder: string, urgent: boolean){
    return this.httpClient.get<Job[] | any>(`${URL}/job/ByKeywordWithUrgent?keyword=${keyword}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&urgent=${urgent}`);
  }
  getByTag(tag: string, page: number, limit: number, sortBy: string, sortOrder: string){
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByTagsWithKeyword?tag=${tag}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByTagWithUrgent(tag: string, page: number, limit: number, sortBy: string, sortOrder: string, urgent: boolean){
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByTagsWithKeywordAndUrgent?tag=${tag}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&urgent=${urgent}`);
  }
  create(job:any){
    return this.httpClient.post(`${URL}/job/create`,job);
  }

  update(job:any,id:string){
    console.log(id);
    return this.httpClient.put<Job>(`${URL}/job/updateJob?id=${id}`,job);
  }


  getByRecruiter(recruiterId:string,page:number,limit:number,sortBy:string,sortOrder:string){
    return this.httpClient.get<Job[]>(`${URL}/job/getByRecruiter?id=${recruiterId}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByLocation(location:string,page:number,limit:number,sortBy:string,sortOrder:string){
    return this.httpClient.get<Job[]>(`${URL}/job/getByLocationdWithKeyword?keyword=${location}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByLocationWithUrgent(location:string,page:number,limit:number,sortBy:string,sortOrder:string,urgent:boolean){
    return this.httpClient.get<Job[]>(`${URL}/job/getByLocationdWithKeywordAndUrgent?keyword=${location}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&urgent=${urgent}`);
  }

  getByCompany(companyId:string,page:number,limit:number,sortBy:string,sortOrder:string){
    return this.httpClient.get<Job[]>(`${URL}/job/getByCompany?companyId=${companyId}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
    }

  getByJobId(jobId:string){
    return this.httpClient.get<Job>(`${URL}/job/getById?id=${jobId}`);
  }


  deleteJob(jobId:string, companyId:string, fieldId:string, carrerId:string){
    return this.httpClient.delete<Boolean>(`${URL}/job/deleteJob?id=${jobId}&carrerId=${carrerId}&fieldId=${fieldId}&companyId=${companyId}`);
  }
  updateRecrutment(recruitment:any,jobId:string){
    return this.httpClient.put<Job>(`${URL}/job/updateRecruitment?id=${jobId}`,recruitment);
  }
}

