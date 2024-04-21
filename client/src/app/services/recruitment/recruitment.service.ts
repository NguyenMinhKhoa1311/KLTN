import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruitment } from '../../models/recruitment.model';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor(private httpClient: HttpClient) {}

  getByRecruiter(recruiter: string, page: number, limit: number, sortBy = 'createdAt', sortOrder: string) {
    return this.httpClient.get<Recruitment[]>(`${URL}/recruitment/getByRecruiter?recruiter=${recruiter}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  updateStatusSeen(recruiter: string , status: boolean){
    return this.httpClient.put<boolean>(`${URL}/recruitment/updateStatusSeen?id=${recruiter}&status=${status}`, {});
  }
  updateStatus(recruiter: string , status: boolean){
    return this.httpClient.put<boolean>(`${URL}/recruitment/updateStatus?id=${recruiter}&status=${status}`, {});
  }
}
