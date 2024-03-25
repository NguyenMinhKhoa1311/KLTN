import { Component,ChangeDetectionStrategy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {

  page: number = 0;
  throttle = 500;
  scrollDistance = 1;
  scrollUpDistance = 2;

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    this.page += 1;
    // this.store.dispatch(
    //   JobActions.getByFieldAtHome({ page: this.page, pageSize: 2 })
    // );
    console.log('page', this.page);
    
  }

  constructor(
    private store: Store<{ job: jobState }>
  ){}


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
