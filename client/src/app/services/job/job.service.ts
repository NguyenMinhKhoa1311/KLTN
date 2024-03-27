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

  getByCareer(career: string, page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareer?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&career=${career}`);
  }

  getByHotJob( page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByHotJob?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  getAllAndSort(page: number, limit: number, sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getAllAndSort?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  getByFieldName( fieldName: string, page: number,limit: number,  sortBy: string, sortOrder: string) {
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByFieldName?fieldName=${fieldName}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getByCareerName(CareerName: string, page: number, limit: number, sortBy: string, sortOrder: string) {
    console.log(CareerName);
    
    return this.httpClient.get<Job[] | any>(`${URL}/job/getByCareerName?careerName=${CareerName}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
}
