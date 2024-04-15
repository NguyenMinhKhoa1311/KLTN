import { Component,ChangeDetectionStrategy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { Store } from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';


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
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  
})
export class JobComponent {

  subscriptions: Subscription[] = [];


  //variables
  page: number = 0;
  fieldId: string = "";

  // ngrx of job
  jobsTakenByAllAndSort$ = this.store.select('job', 'JobTakenBygetAllAndSortAtJob');
  jobsTakenByField$ = this.store.select('job', 'jobsTakenByFieldAtJob');
  jobTakenByFieldName$ = this.store.select('job', 'JobTakenByFieldNameAtJob');
  jobTakenByCareerName$ = this.store.select('job', 'JobTakenByCareerNameAtJob');
  jobTakenByLocation$ = this.store.select('job', 'jobsTakenByLocationAtJob');

  // ngrx of field
  fieldNoLimitAtJob$ = this.store.select('field','fieldNoLimitAtJob');

  //ngrx of career
  careersTakenByGetAllAtJob$ = this.store.select('career','careersTakenByGetAllAtJob');  
  careerTakenByFieldName$ = this.store.select('career','careersTakenByGetByFieldNameAtJob')

  jobToRender: Job[] = [];
  fieldList: readonly string[] = [];
  careerList: readonly string[] = [];

  constructor(
    private store: Store<{ job: jobState, field : FieldState, career : CareerState }>,
    private route: ActivatedRoute,
  ){
    this.fieldId = this.route.snapshot.paramMap.get('fieldId')??"";
    if(this.fieldId.length > 0){
      this.store.dispatch(JobActions.getByFieldAtJob({field: this.fieldId, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      
    }else{
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }


    this.store.dispatch(FieldActions.getAllNoLimit());
    this.store.dispatch(CareerActions.getAllAtJobs());

    this.subscriptions.push(

      //subscribe to ngrx of getAllAndSortAtJob
      this.jobsTakenByAllAndSort$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }
      }),
      this.jobsTakenByField$.subscribe((jobs)=>{        
        if(jobs.length>0){
          this.jobToRender = jobs;
        }
      }),
      
      //subscribe to ngrx of fieldNoLimitAtJob
      this.fieldNoLimitAtJob$.subscribe((fields)=>{
        if(fields.length>0){
          //lấy ra danh sách các field name
          this.fieldList = fields.map(field => field.FieldName);
        }
      }),
      
      //subscribe to ngrx of careersTakenByGetAllAtJob
      this.careersTakenByGetAllAtJob$.subscribe((careers)=>{
        if(careers.length>0){

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
      }),

      //subscribe to ngrx of getByFieldNameAtJob
      this.careerTakenByFieldName$.subscribe((careers)=>{
        console.log("CAREER: ", careers);
        
        if(careers.length>0){
          console.log("CAREER: ", careers);
          
          this.careerList = careers.map(career => career.Name);
        }
      }),

      //subscribe to ngrx of getByLocationdWithKeywordsAtJob
      this.jobTakenByLocation$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }
      })
      
    )



  }


  fieldValue: any;
  onFieldValueChange() {
    console.log("Giá trị đã chọn là: ", this.fieldValue);
    if(this.fieldValue != null){
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      this.store.dispatch(CareerActions.getByFieldNameAtJob({fieldName: this.fieldValue}));
    }else{
      this.store.dispatch(CareerActions.getAllAtJobs());
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }
    
  
  }

  careerValue:any;
  onCareerValueChange(){
    console.log("Giá trị đã chọn là: ", this.careerValue);
    if(this.careerValue != null){
      this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));

    }
  }
  
  locationValue = '';
  locationValueChange(){
    console.log("Giá trị đã chọn là: ", this.locationValue);
    if(this.locationValue != null){
      this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }

  nextJobs(){
    this.page++;
    this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));

  }
  previousJobs(){
    if(this.page > 0){
      this.page--;
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }

  }

  readonly locationList = [
    "An Giang",
    "Bà Rịa-Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái"
  ];



  onSelectionChange(_id: string) {
    console.log("Giá trị đã chọn là: ", _id);
  }


  

  testForm = new FormGroup({
    testValue2: new FormControl(false),
  });
}
