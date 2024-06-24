import { Injectable } from '@angular/core';
import { Admin } from '../../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient: HttpClient
  ) {}
  create(admin: any){

    return this.httpClient.post<Admin>(`${URL}/admin/create`, admin);
  }
  findAll(){
    return this.httpClient.get<Admin[]>(`${URL}/admin/all`);
  }
  findByUser(email: string){
    return this.httpClient.get<Admin>(`${URL}/admin/byUser?email=${email}`);
  }
  findBy_id(id: string){
    console.log('id', id);
    
    return this.httpClient.get<Admin>(`${URL}/admin/getBy_id?id=${id}`);
  }
}
