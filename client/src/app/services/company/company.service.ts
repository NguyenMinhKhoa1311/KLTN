import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Company } from '../../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {}

  getAllAndSort(page: number, limit: number, sortBy: string, sortOrder: string){
    return this.httpClient.get<Company[]>(`${URL}/company/getAllWithLimit?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }
  getBy_Id(id: string){
    return this.httpClient.get<Company>(`${URL}/company/getBy_id?id=${id}`);
  }

}
