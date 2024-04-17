import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../environments/environments';
import { ServicePackage } from '../../models/service-package.model';

@Injectable({
  providedIn: 'root'
})
export class ServicePackageService {

  constructor(private httpClient: HttpClient) {}

  create(servicePackage: any){
    return this.httpClient.post<ServicePackage>(URL + '/service-package/create', servicePackage);
  }
}
