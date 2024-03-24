import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import { Router } from '@angular/router';
import * as JobActions from '../../../ngrx/actions/job.actions';
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


  isGetJobsByFieldAtHome$ = this.store.select('job', 'isGetByFieldAtHomeSuccess');
  isGetJobsByCareerAtHome$ = this.store.select('job', 'isGetByCareerAtHomeSuccess');
  jobsTakenByField$ = this.store.select('job', 'jobTakenByFieldAtHome');
  jobsTakenByCareer$ = this.store.select('job', 'jobTakenByCareerAtHome');
  careerList : Career[] = [];


  constructor(
    private store : Store<{job: jobState}>,
    private router: Router
  ){

    this.store.dispatch(JobActions.getByCareerAtHome({career:"65f1562282e49c175be5c0d1", page: 0, limit: 10, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(JobActions.getByFieldAtHome({field:"65f1973d0f14f077b6d83684", page: 0, limit: 10, sortBy: "createdAt", sortOrder: "desc"}));

    this.isGetJobsByFieldAtHome$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.jobsTakenByField$.subscribe((jobs) => {
          console.log(jobs);
        });
      }
    });
    this.isGetJobsByCareerAtHome$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.jobsTakenByCareer$.subscribe((jobs) => {
          console.log(jobs);
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
