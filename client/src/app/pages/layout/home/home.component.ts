import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';

import { FieldState } from '../../../ngrx/states/field.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';

import { Career } from '../../../models/career.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  //ngrx of job
  isGetJobsByHotJobAtHome$ = this.store.select('job', 'isGetByHotJobAtHomeSuccess');
  jobsTakenByHotJob$ = this.store.select('job', 'jobTakenByHotJobAtHome');
  isGetJobsByFieldAtHome$ = this.store.select('job', 'isGetByFieldAtHomeSuccess');
  isGetJobsByCareerAtHome$ = this.store.select('job', 'isGetByCareerAtHomeSuccess');
  jobsTakenByField$ = this.store.select('job', 'jobTakenByFieldAtHome');
  jobsTakenByCareer$ = this.store.select('job', 'jobTakenByCareerAtHome');
  careerList : Career[] = [];


  //ngrx for field
  isGetFieldsAtHome$ = this.store.select('field', 'isGetFieldAtHomeSuccess');
  fieldsTakenAtHome$ = this.store.select('field', 'fieldAtHome');

  constructor(
    private store : Store<{job: jobState, field: FieldState}>,
    private router: Router
  ){

    this.store.dispatch(JobActions.getByCareerAtHome({career:"65f1562282e49c175be5c0d1", page: 0, limit: 10, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(JobActions.getByFieldAtHome({field:"65f1973d0f14f077b6d83684", page: 0, limit: 10, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(JobActions.getByHotJobAtHome({ page: 0, limit: 10, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(FieldActions.getFieldAtHome())

    //job taken by field
    this.isGetJobsByFieldAtHome$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.jobsTakenByField$.subscribe((jobs) => {
          console.log(jobs);
        });
      }
    });

    //job taken by career
    this.isGetJobsByCareerAtHome$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.jobsTakenByCareer$.subscribe((jobs) => {
          console.log(jobs);
        });
      }
    });

    //job taken by hot job
    this.isGetJobsByHotJobAtHome$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.jobsTakenByHotJob$.subscribe((jobs) => {
          console.log(jobs);
        });
      }
    });

    // all field
    this.isGetFieldsAtHome$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.fieldsTakenAtHome$.subscribe((fields) => {
          console.log(fields);
        });
      }
    });
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

    readonly bestWorkList = [
      {
        nameWork: 'Truong phong kinh doanh kinh te',
        company: 'Google',
        location: 'USA',
      },
      {
        nameWork: 'Truong phong kinh qweqweqweqweqwe',
        company: 'Google',
        location: 'USA',
      },
      {
        nameWork: 'Truong phong kinh danh kinh te',
        company: 'Google',
        location: 'USA',
      },
    ];


}
