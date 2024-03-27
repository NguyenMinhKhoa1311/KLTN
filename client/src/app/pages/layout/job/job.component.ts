import { Component,ChangeDetectionStrategy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { Store } from '@ngrx/store';
0

import { jobState } from '../../../ngrx/states/job.state';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';

import * as JobActions from '../../../ngrx/actions/job.actions';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';

import { Job } from '../../../models/job.model';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  
})
export class JobComponent {

  // variable for infinite scrolling

  throttle = 20;
  scrollDistance = 1;
  scrollUpDistance = 1.5;
  
  // ngrx of getAllAndSortAtJob
  page: number = 0;
  jobsTakenByAllAndSort$ = this.store.select('job', 'JobTakenBygetAllAndSortAtJob');
  getAllNoLimit$ = this.store.select('field','fieldNoLimitAtJob');
  getAll$ = this.store.select('career','careersTakenByGetAllAtJob');  

  jobsTakenByAllAndSort: Job[] = [];
  getAllNoLimit: Field[] = [];
  getAll: Career[] = [];
  getByFieldAtJob: Job[] = [];

  fieldList: readonly string[] = [];
  careerList: readonly string[] = [];

  constructor(
    private store: Store<{ job: jobState, field : FieldState, career : CareerState }>
  ){
    this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 3, sortBy: "createdAt", sortOrder: "desc"}));
    this.jobsTakenByAllAndSort$.subscribe((jobs)=>{
      if(jobs.length>0){
        //console.log(jobs);
        this.jobsTakenByAllAndSort = jobs;
        //console.log(this.jobsTakenByAllAndSort);
      }
    });

    this.store.dispatch(FieldActions.getAllNoLimit());
    this.getAllNoLimit$.subscribe((fields)=>{
      if(fields.length>0){
        //console.log(fields);
        this.getAllNoLimit = fields;
        console.log(this.getAllNoLimit);
        //lấy ra danh sách các field name
        this.fieldList = fields.map(field => field.FieldName);
      }
    });
    
    this.store.dispatch(CareerActions.getAllAtJobs());
    this.getAll$.subscribe((careers)=>{
      if(careers.length>0){
        //console.log(careers);
        this.getAll = careers;
        //console.log(this.getAll);
        //lấy ra danh sách các industry name
        this.careerList = careers.map(career => career.Name);
      }
    });
  }


  fieldValue: any;
  onFieldValueChange() {
    console.log("Giá trị đã chọn là: ", this.fieldValue);
  
  }

  careerValue:any;
  onCareerValueChange(){
    console.log("Giá trị đã chọn là: ", this.careerValue);
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

  onSelectionChange(_id: string) {
    
    console.log("Giá trị đã chọn là: ", _id);
  }
}
