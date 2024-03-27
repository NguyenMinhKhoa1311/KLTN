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
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  
})
export class JobComponent {

  subscriptions: Subscription[] = [];

  // ngrx of getAllAndSortAtJob
  page: number = 0;
  jobsTakenByAllAndSort$ = this.store.select('job', 'JobTakenBygetAllAndSortAtJob');
  jobTakenByFieldName$ = this.store.select('job', 'JobTakenByFieldNameAtJob');
  jobTakenByCareerName$ = this.store.select('job', 'JobTakenByCareerNameAtJob');
  getAllNoLimit$ = this.store.select('field','fieldNoLimitAtJob');
  getAll$ = this.store.select('career','careersTakenByGetAllAtJob');  

  jobToRender: Job[] = [];
  getAllNoLimit: Field[] = [];
  getAll: Career[] = [];
  getByFieldAtJob: Job[] = [];

  fieldList: readonly string[] = [];
  careerList: readonly string[] = [];

  constructor(
    private store: Store<{ job: jobState, field : FieldState, career : CareerState }>
  ){
    this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    this.store.dispatch(FieldActions.getAllNoLimit());
    this.store.dispatch(CareerActions.getAllAtJobs());

    this.subscriptions.push(

      //subscribe to ngrx of getAllAndSortAtJob
      this.jobsTakenByAllAndSort$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }
      }),
      
      //subscribe to ngrx of getAllNoLimit
      this.getAllNoLimit$.subscribe((fields)=>{
        if(fields.length>0){
          this.getAllNoLimit = fields;
          //lấy ra danh sách các field name
          this.fieldList = fields.map(field => field.FieldName);
        }
      }),
      
      //subscribe to ngrx of getAll
      this.getAll$.subscribe((careers)=>{
        if(careers.length>0){
          this.getAll = careers;
          //lấy ra danh sách các industry name
          this.careerList = careers.map(career => career.Name);
        }
      }),

      //subscribe to ngrx of getByFieldNameAtJob
      this.jobTakenByFieldName$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }
      }),

      //subscribe to ngrx of getByCareerNameAtJob
      this.jobTakenByCareerName$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }
      })
    )



  }


  fieldValue: any;
  onFieldValueChange() {
    console.log("Giá trị đã chọn là: ", this.fieldValue);
    this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
  
  }

  careerValue:any;
  onCareerValueChange(){
    console.log("Giá trị đã chọn là: ", this.careerValue);
    this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
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
