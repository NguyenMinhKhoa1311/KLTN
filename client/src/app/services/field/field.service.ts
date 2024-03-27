import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { Field } from '../../models/field.model';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private httpClient: HttpClient) {}

  getAll(page: number, limit: number){
    return this.httpClient.get<Field[]>(`${URL}/field/getAllWithLimit/?page=${page}&limit=${limit}`);
  }

  getAllNoLimit(){
    return this.httpClient.get<Field[]>(`${URL}/field/getAll`);
  }

}
