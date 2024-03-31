import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Career } from '../../models/career.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private httpClient: HttpClient) {}

  getAll(){
    return this.httpClient.get<Career[]>(`${URL}/career/getAll`);
  }

  getByFieldName(fieldName: string){
    return this.httpClient.get<Career[]>(`${URL}/career/getByFieldName?name=${fieldName}`);
  }

  


}
