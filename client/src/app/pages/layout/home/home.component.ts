import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';

import { FieldState } from '../../../ngrx/states/field.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';

import { Job } from '../../../models/job.model';
import { Field } from '../../../models/field.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class HomeComponent implements OnDestroy {

  subscriptions: Subscription[] = [];

  //ngrx of job
  jobsTakenByHotJob$ = this.store.select('job', 'jobTakenByHotJobAtHome');
  jobsTakenByField$ = this.store.select('job', 'jobTakenByFieldAtHome');
  jobsTakenByCareer$ = this.store.select('job', 'jobTakenByCareerAtHome');

  JobGetByHotJob: Job[] = [];
  JobGetByField: Job[] = [];
  JobGetByCareer: Job[] = [];
  fields: Field[] = [];
  pageHotJob: number = 0;

  trackByJob(index: number, job: any): number {
    return job._id; // Sử dụng id của job làm key để theo dõi
  }


  //ngrx for field
  isGetFieldsAtHome$ = this.store.select('field', 'isGetFieldAtHomeSuccess');
  fieldsTakenAtHome$ = this.store.select('field', 'fieldAtHome');



  constructor(
    private store : Store<{job: jobState, field: FieldState}>,
    private router: Router
  ){

    this.store.dispatch(JobActions.getByCareerAtHome({career:"65fcd76688351d8e59e4156c", page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(JobActions.getByFieldAtHome({field:"65fa87733dcc1153af38b186", page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(JobActions.getByHotJobAtHome({ page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(FieldActions.getFieldAtHome({page: 0, limit: 5}))

    this.subscriptions.push(
      //job taken by field

        this.jobsTakenByField$.subscribe((jobs) => {
          if (jobs.length>0) {
            console.log(jobs);
            this.JobGetByField = jobs;
  
          }
        }),


    //job taken by career

        this.jobsTakenByCareer$.subscribe((jobs) => {
          if(jobs.length>0){
            console.log(jobs);
            this.JobGetByCareer = jobs;
          }

        }),


    //job taken by hot job

        this.jobsTakenByHotJob$.subscribe((jobs) => {
          if(jobs.length>0){
          console.log(jobs);
          this.JobGetByHotJob = jobs;
          }
        }),

    // all field

        this.fieldsTakenAtHome$.subscribe((fields) => {
          if(fields.length>0){
            console.log(fields);
            this.fields = fields;
          }

        })

    )
    
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
    this.store.dispatch(JobActions.clearStateAtHome());
  }


  nextPageHotJob(): void {
    this.pageHotJob += 1;
    this.store.dispatch(JobActions.getByHotJobAtHome({ page: this.pageHotJob, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
  }
  previousPageHotJob(): void {
    if (this.pageHotJob > 0) {
      this.pageHotJob -= 1;
      this.store.dispatch(JobActions.getByHotJobAtHome({ page: this.pageHotJob, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }


  index_outstanding = 0;
  index_item = 0;
  index = 2;
  




  

  readonly items = [
      {
          img: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/02/hinh-nen-may-tinh-4k-2.jpg',
          title: 'Image',
      },
      {
        img: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/02/hinh-nen-may-tinh-4k-4.jpg',
        title: 'Image',
      },
      {
        img: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/02/hinh-nen-may-tinh-4k-5.jpg',
        title: 'Image',
      },
      {
        img: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/02/hinh-nen-may-tinh-4k-6.jpg',
        title: 'Image',
      },
      {
        img: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/02/hinh-nen-may-tinh-4k-13.jpg',
        title: 'Image',
      },
    ];



    readonly zxc = [
      {
        name: 'KINH DOANH',
        quantity: 1662,
      },
      {
        name: 'KINH DOANH',
        quantity: 1662,
      }
    ];
    


}
