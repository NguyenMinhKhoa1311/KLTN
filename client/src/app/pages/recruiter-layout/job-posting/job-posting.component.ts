import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';
import { ServicePackageState } from '../../../ngrx/states/service-package.state';
import { jobState } from '../../../ngrx/states/job.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import * as ServicePackageActions from '../../../ngrx/actions/service-package.actions';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';
import { ServicePackage } from '../../../models/service-package.model';
import { Job } from '../../../models/job.model';
import { generateUuid } from '../../../../environments/environments';


@Component({
  selector: 'app-job-posting',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.less'
})
export class JobPostingComponent implements OnDestroy{

  subscriptions: Subscription[] = [];



  //ngrx of career
  careerTakenByGetAllAtCreateJob$ = this.store.select('career', 'careersTakenByGetAllAtCreateJob');
  careerTakenByFieldAtCreateJob$ = this.store.select('career', 'careersTakenByGetByFieldAtCreateJob');

  //ngrx of field
  fieldNoLimitAtCreateJob$ = this.store.select('field', 'fieldNoLimitAtCreateJob');

  //ngrx of service package
  servicePackageCreatedAtPostJob$ = this.store.select('servicePackage', 'servicePackageCreatedAtPostJob');

  //ngrx of job
  isCreateJobAtJob$ = this.store.select('job', 'isCreateJobAtCreateJobSuccess');

  // Lấy timestamp hiện tại
  timestamp = Date.now();

  // Khởi tạo Date object từ timestamp
  date = new Date(this.timestamp);

  // Lấy ngày, tháng, năm từ Date object
  day = this.date.getDate();
  month = this.date.getMonth(); 
  year = this.date.getFullYear();

  jobPostForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Location: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),

    Salary: new FormControl('', [Validators.required]),
    SalaryStart: new FormControl('', [Validators.required]),
    SalaryEnd: new FormControl('', [Validators.required]),
    Negotiate: new FormControl(false),

    Requirement: new FormControl('', [Validators.required]),
    Career: new FormControl('', [Validators.required]),
    Field: new FormControl('', [Validators.required]),
    DateStart: new FormControl(new TuiDay(this.year, this.month, this.day)),
    DateEnd: new FormControl(new TuiDay(this.year, this.month, this.day)),
    
    Welfare: new FormControl('', [Validators.required]),
    Tag: new FormControl('', [Validators.required]),

  });

//variables
  fields: Field[] = [];
  careers: Career[] = [];
  nameOffields: readonly string[] = [];
  nameOfCareers: readonly string[] = [];
  servicePackageChoiced: any;
  jobToCreate: any;
  isCreateServicePackage: boolean = false;
  token: string = "";



  constructor(
    private router: Router,
    private store: Store<{
      field: FieldState;
      career: CareerState;
      servicePackage: ServicePackageState;
      job: jobState;
    }>
    ) {
      let token = sessionStorage.getItem('tokenOfCandidate');
    
    if(token){
      this.token = token;
    }
      const servicePackage = sessionStorage.getItem('servicePackedChoiced');
      if(servicePackage){
        this.servicePackageChoiced = JSON.parse(servicePackage || '');
        console.log(this.servicePackageChoiced);
      }
      //get all career, field, servicePackage
      this.store.dispatch(CareerActions.getAllAtCreateJob())
      this.store.dispatch(FieldActions.getAllNoLimitAtCreateJob())


      this.subscriptions.push(
        this.careerTakenByGetAllAtCreateJob$.subscribe((careers) => {
          if(careers.length > 0){
            this.careers = careers;
            this.nameOfCareers = careers.map(career => career.Name);            
          }
        }),
        this.fieldNoLimitAtCreateJob$.subscribe((fields) => {
          if(fields.length > 0){
            this.fields = fields;
            this.nameOffields = fields.map(field => field.FieldName);
          }
        }),
        this.servicePackageCreatedAtPostJob$.subscribe((servicePackage) => {
          if(this.isCreateServicePackage){
            if(servicePackage._id.length > 0){
              this.jobToCreate.ServicePackage = servicePackage._id;
              console.log(this.jobToCreate);
              this.store.dispatch(JobActions.createJobAtJob({job: this.jobToCreate,token: this.token}))
            }
          }
        }),
        this.careerTakenByFieldAtCreateJob$.subscribe((careers) => {
          if(careers.length > 0){
            this.careers = careers;
            this.nameOfCareers = careers.map(career => career.Name);            
          }
        }),
        this.isCreateJobAtJob$.subscribe((isSuccess) => {
          if(isSuccess){
            alert("Tạo công việc thành công");
            this.tagsList = [];
            this.locationList = [];
            this.welfareList = [];
            //this.router.navigate(['recruiter/job-management']);
          }
        })
      );
    }
  ngOnDestroy(): void {
    this.store.dispatch(JobActions.resetState());
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  fieldValue: any
  onFieldChange() {
    if(this.fieldValue){
      const selectedField = this.fields.find(field => field.FieldName == this.fieldValue);
      if(selectedField){
      this.store.dispatch(CareerActions.getByFieldAtCreateJob({field: selectedField._id??""}))
      }

    }
    
  }

  createJob(){
    if(this.jobPostForm.value.Negotiate){
      this.jobPostForm.controls.Salary.setValue("Thỏa thuận");
      this.jobPostForm.controls.SalaryStart.setValue("0");
      this.jobPostForm.controls.SalaryEnd.setValue("0");
    }
    else{
      this.jobPostForm.controls.Salary.setValue(this.jobPostForm.value.SalaryStart + "-" + this.jobPostForm.value.SalaryEnd);
    }
    const jobToCreate: any={
      Name: this.jobPostForm.value.Name??"",
      JobId: generateUuid(),
      Description: this.jobPostForm.value.Description??"",
      Recruitment: [],
      Recruiter: "65fa893d3dcc1153af38b1a5",
      Company:"65fa88763dcc1153af38b190",
      Address: this.jobPostForm.value.Address??"",
      Location: this.locationList,
      Salary: this.jobPostForm.value.Salary??"",
      Welfare: this.welfareList??[],
      Career: this.careers.find(career => career.Name == this.jobPostForm.value.Career)?._id??"",
      Field: this.fields.find(field => field.FieldName == this.jobPostForm.value.Field)?._id??"",
      StartDate: this.jobPostForm.value.DateStart??new Date(),
      EndDate: this.jobPostForm.value.DateEnd??new Date(),
      Requirement: this.jobPostForm.value.Requirement??"",
      ServicePackage: "",
      Tags: this.tagsList??[],
      StatusPayment: false,
      Priority: this.servicePackageChoiced?.Priority??0,
      Hot: this.servicePackageChoiced?.Hot??false,
      ColorTitle: this.servicePackageChoiced?.ColorTitle??"",
      Urgent: this.servicePackageChoiced?.Urgent??false,
      StartSalary: this.jobPostForm.value.SalaryStart??0,
      EndSalary: this.jobPostForm.value.SalaryEnd??0,
      ImageOfCompany: "https://media.istockphoto.com/id/1128180520/vi/anh/%C4%91%E1%BB%99i-ng%C5%A9-d%E1%BB%8Bch-v%E1%BB%A5-d%E1%BB%8Dn-d%E1%BA%B9p-chuy%C3%AAn-nghi%E1%BB%87p-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-thi%E1%BA%BFt-b%E1%BB%8B-v%E1%BB%87-sinh-trong-ph%C3%B2ng-kh%C3%A1i-ni%E1%BB%87m-d%E1%BB%8Bch.jpg?s=612x612&w=0&k=20&c=nks0Tp1BP71s-_WsPD5UzzD638zeFuR14oiTTn-60bE="



    }
    console.log(jobToCreate);
    this.jobToCreate = jobToCreate;
    if(!this.isCreateServicePackage){
      this.isCreateServicePackage = true;
    }
    this.store.dispatch(ServicePackageActions.createAtPostJob({servicePackage: this.servicePackageChoiced}));
  }
  
  tagsList : string[] = [];
  addTag(){
    const newTag = this.jobPostForm.value.Tag;
    if(newTag){
      this.tagsList.push(newTag);
      this.jobPostForm.controls.Tag.setValue('');
    }
    console.log(this.tagsList);
  }
  removeTag(index: number){
    this.tagsList.splice(index, 1);
    console.log(this.tagsList);
  }

  locationList:string[]=[];
  addLocation(){
    const newLocation = this.jobPostForm.value.Location;
    if(newLocation){
      this.locationList.push(newLocation);
      this.jobPostForm.controls.Location.setValue('');
    }
    console.log(this.locationList);
  }
  removeLocation(index: number){
    this.locationList.splice(index, 1);
    console.log(this.locationList);
  }

  

  welfareList : string[] = [];
  addWelfare(){
    const newWelfare = this.jobPostForm.value.Welfare;
    if(newWelfare){
      this.welfareList.push(newWelfare);
      this.jobPostForm.controls.Welfare.setValue('');
    }
    console.log(this.welfareList);
  }
  removeWelfare(index: number){
    this.welfareList.splice(index, 1);
    console.log(this.welfareList);
  }
}


