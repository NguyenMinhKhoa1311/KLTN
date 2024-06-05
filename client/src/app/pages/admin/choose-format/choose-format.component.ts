import { Component, OnDestroy, ViewChild } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {TuiInputTimeComponent, tuiCreateTimePeriods} from '@taiga-ui/kit';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CronJobState } from '../../../ngrx/states/cron-job.state';
import { TuiAlertService } from '@taiga-ui/core';
import * as CronJobActions from '../../../ngrx/actions/cron-job.actions';
import { getTimeFromCronTime } from '../../../../environments/environments';



@Component({
  selector: 'app-choose-format',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './choose-format.component.html',
  styleUrl: './choose-format.component.less'
})
export class ChooseFormatComponent implements OnDestroy{
  formatForm = new FormGroup({
    time: new FormControl('', Validators.required),
    format: new FormControl('', Validators.required),
  }); 

  format = null;
  formats = [
    '1',
    '2',
    '3',
  ];
  selectedFormat: number | null = null;  
  items2 = tuiCreateTimePeriods(0, 24, [0,5,10, 15,20,25,30,35,40,45,50,55]);

  subscriptions: Subscription[] = [];
  //variables
  //ngrx of cronJob
  cronJobTakenAtChangeFormat$ = this.store.select('cronJob', 'cronJobAtChangeFormat');
  isUpdateCronJobAtChangeFormatSuccess$ = this.store.select('cronJob', 'isUpdateCronJobAtChangeFormatSuccess');
  constructor(
    private store: Store<{cronJob: CronJobState}>,
    private readonly alerts: TuiAlertService,
  ) {
    this.store.dispatch(CronJobActions.getCronJobAtChangeFormat());
    this.subscriptions.push(
      this.cronJobTakenAtChangeFormat$.subscribe((cronJob)=>{
        
        if(cronJob.cronTime){
          const time = getTimeFromCronTime(cronJob.cronTime);
          console.log(time.hours + ' ' + time.minute);
          
          this.formatForm.setValue({
            time: time.hours + ' ' + time.minute,
            format: cronJob.format.toString()
          })
          this.formatForm.valueChanges.subscribe(value => this.onFormatChange(cronJob.format));
        }
      }),
      this.isUpdateCronJobAtChangeFormatSuccess$.subscribe((status)=>{
        if(status){
          this.alerts
          .open('', {label: 'Cập nhật thành công',status:'success'})
          .subscribe();
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onFormatChange(value: number) {
    this.selectedFormat = value;
  }


  update(){

    const cronTime = `0 ${this.formatForm.value.time} * * *`;
    console.log(cronTime);
    
    this.store.dispatch(CronJobActions.updateCronJobAtChangeFormat({cronTime: cronTime, format: parseInt(this.formatForm.value.format??"1")}));

  }
}
