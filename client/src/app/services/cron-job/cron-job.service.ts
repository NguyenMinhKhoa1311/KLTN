import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CronJob } from '../../models/cron-job.model';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CronJobService {

  constructor(private httpClient: HttpClient) {}

  getCronJob(){
    console.log('getCronJob');
    
    return this.httpClient.get<CronJob>(`${URL}/cron-job/get`);
  }
  updateCronJob(cronTime: string, format: number){
    return this.httpClient.post(`${URL}/cron-job/update`, {cronTime, format});
  }

}
