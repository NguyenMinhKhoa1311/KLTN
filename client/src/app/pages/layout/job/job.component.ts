import { Component,ChangeDetectionStrategy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Job } from '../../../models/job.model';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {

  // variable for infinite scrolling

  throttle = 20;
  scrollDistance = 1;
  scrollUpDistance = 1.5;

  // ngrx of getAllAndSortAtJob
  page: number = 0;
  jobsTakenByAllAndSort$ = this.store.select('job', 'JobTakenBygetAllAndSortAtJob');
  jobsTakenByAllAndSort: Job[] = [];



  constructor(
    private store: Store<{ job: jobState }>
  ){
    this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 3, sortBy: "createdAt", sortOrder: "desc"}));

    this.jobsTakenByAllAndSort$.subscribe((jobs)=>{

      if(jobs.length>0){
        console.log(jobs);
        this.jobsTakenByAllAndSort = jobs;
        console.log(this.jobsTakenByAllAndSort);
        
      }
    })
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    this.page += 1;

    console.log('page', this.page);
    this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 3, sortBy: "createdAt", sortOrder: "desc"}));
    
  }

  readonly locations = [
      'Tất cả địa điểm',
      'Ninh Thuận',
      'Ninh Bình',
      'Bình Dương',
      'Bình Chánh',
      'Hồ Chí Minh',
      'Phan Thiết',
  ];
  locationValue = 'Tất cả địa điểm';

  readonly industries = [
      'Tất cả loại công việc',
      'Full-time',
      'Part-time',
      'Thực tập',
      'Remote',
  ];
  industryValue = 'Tất cả loại công việc';

  readonly fields = [
    'Tất cả loại công việc',
    'Full-time',
    'Part-time',
    'Thực tập',
    'Remote',
  ];
  fieldValue = 'Tất cả loại công việc';
 
  readonly bestWorkList = [
    {
      nameWork: 'Truong phong kinh doanh kinh te',
      company: 'Google',
      location: '1',
    },
    {
      nameWork: 'Truong phong kinh qweqweqweqweqwe',
      company: 'Google',
      location: '2',
    },
    {
      nameWork: 'Truong phong kinh danh kinh te',
      company: 'Google',
      location: '3',
    },
    {
      nameWork: 'Truong phong kinh doanh kinh te',
      company: 'Google',
      location: '4',
    },
    {
      nameWork: 'Truong phong kinh qweqweqweqweqwe',
      company: 'Google',
      location: '5',
    },
    {
      nameWork: 'Truong phong kinh danh kinh te',
      company: 'Google',
      location: '6',
    },
    {
      nameWork: 'Truong phong kinh doanh kinh te',
      company: 'Google',
      location: '7',
    },
    {
      nameWork: 'Truong phong kinh doanh kinh te',
      company: 'Google',
      location: '8',
    },
    {
      nameWork: 'Truong phong kinh doanh kinh te',
      company: 'Google',
      location: '9',
    },
  ];

  
}
