import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../../models/payment.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) {}

  createPayment(bill: any){

    return this.httpClient.post<Payment>('http://localhost:3000/payment/create',bill);
  }
}
