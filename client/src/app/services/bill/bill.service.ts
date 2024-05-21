import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Bill } from '../../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  
  constructor(private httpClient: HttpClient) {}
  getByMonth(month: number, year: number,recruiter: string){
    return this.httpClient.get<Bill[]>(`${URL}/bill/getByMonth?recruiter=${recruiter}&month=${month}&year=${year}`);
  }
  getByYear(year: number,recruiter: string){
    return this.httpClient.get<Bill[]>(`${URL}/bill/getByYear?recruiter=${recruiter}&year=${year}`);
  }
  getByDate(date: string,recruiter: string){
    return this.httpClient.get<Bill[]>(`${URL}/bill/getByDate?recruiter=${recruiter}&date=${date}`);
  }
}
