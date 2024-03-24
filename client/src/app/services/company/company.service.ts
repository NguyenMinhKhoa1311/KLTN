import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Company } from '../../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {}

  getAll(page: number, limit: number){
    return this.httpClient.get<Company[]>(`${URL}/company/getAllWithLimit?page=${page}&limit=${limit}`);
  }
}
