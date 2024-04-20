import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from '../../models/mail.model';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) {}

  sendMail(mailOptions: Mail) {
    return this.httpClient.post<any>(`${URL}/send-mail`, mailOptions);
  }
}
