import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';

import { FieldState } from '../../../ngrx/states/field.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';

import { CompanyState } from '../../../ngrx/states/company.state';
import * as CompanyActions from '../../../ngrx/actions/company.actions';

import { Job } from '../../../models/job.model';
import { Field } from '../../../models/field.model';
import { Subscription } from 'rxjs';
import { Company } from '../../../models/company.model';
import { Candidate } from '../../../models/candidate.model';
import { LoadingComponent } from '../../loading/loading.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaigaModule,ShareModule,LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  
})


export class HomeComponent implements OnDestroy {

  subscriptions: Subscription[] = [];

  //variables
  isLogin: boolean = false;

  //ngrx of job
  jobsTakenByHotJob$ = this.store.select('job', 'jobTakenByHotJobAtHome');
  jobsTakenByCareer$ = this.store.select('job', 'jobTakenByCareerAtHome');
  jobTakenByGetAllAndSortByWelfareAndSalary$ = this.store.select('job', "jobsTakenByAllAndSortByWelfareAndSalaryAtHome")


  //ngrx for field
  fieldsTakenAtHome$ = this.store.select('field', 'fieldAtHome');


  //ngrx for company
  compantTakenByGetAllAndSortAtHome$ = this.store.select('company', 'companysTakenByGetAllAndSortAtHome');
  //test
  isGetByFieldAtHomeLoading$ = this.store.select('job', 'isGetByFieldAtHomeLoading');
  isGetFieldAtHomeLoading$ = this.store.select('field', 'isGetFieldAtHomeLoading');

//variables
  JobGetByHotJob: Job[] = [];
  JobGetByCareer: Job[] = [];
  JobGetByAllAndSortByWelfareAndSalary: Job[] = [];
  fields: Field[] = [];
  companys: Company[] = [];
  pageHotJob: number = 0;
  pageByField: number = 0;
  pageByCareer: number = 0;
  pageOfField: number = 0;
  candidateToRender: Candidate = <Candidate>{} ;

  isloading : boolean = true;

  constructor(
    private store : Store<{job: jobState, field: FieldState, company: CompanyState}>,
    private router: Router
  ){
    console.log("HomeComponent");
        //lấy user đã login và dùng
        let userLogged = sessionStorage.getItem('userLogged');
        if(userLogged){
          let userAfterParse = JSON.parse(userLogged) as Candidate;
          if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
            console.log(userAfterParse);
            this.isLogin = true;
            this.candidateToRender = userAfterParse;
            this.store.dispatch(JobActions.getByCareerAtHome({career:this.candidateToRender.Career._id, page: 0, limit: 9}));
            this.store.dispatch(JobActions.getByHotJobAtHome({ page: 0, limit: 9}));
            this.store.dispatch(JobActions.getAllAndSortByWelfareAndSalaryAtHome({ page: 0, limit: 9}));
          }
        }
        else{
          this.store.dispatch(JobActions.getAllAndSortByWelfareAndSalaryAtHome({ page: 0, limit: 9}));
          this.store.dispatch(JobActions.getByHotJobAtHome({ page: 0, limit: 9}));

        }
    

    this.store.dispatch(FieldActions.getFieldAtHome({page: 0, limit: 5}))
    this.store.dispatch(CompanyActions.getAllAndSortAtHome({page: 0, limit: 5, sortBy: "createdAt", sortOrder: "desc"}))
    

    this.subscriptions.push(
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

        }),

    // all company

        this.compantTakenByGetAllAndSortAtHome$.subscribe((companys) => {
          if(companys.length>0){
            console.log(companys);
            this.companys = companys;
          }
        }),

    // job taken by get all and sort by welfare and salary
      
          this.jobTakenByGetAllAndSortByWelfareAndSalary$.subscribe((jobs) => {
            if(jobs.length>0){
              this.JobGetByAllAndSortByWelfareAndSalary = jobs;
            }
          }),

    )

    setTimeout(() => {
      this.isloading = false;
    }, 3000);
    

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
    this.store.dispatch(JobActions.clearStateAtHome());
  }


  nextPageHotJob(): void {
    this.pageHotJob += 1;
    this.store.dispatch(JobActions.getByHotJobAtHome({ page: this.pageHotJob, limit: 9}));
  }
  previousPageHotJob(): void {
    if (this.pageHotJob > 0) {
      this.pageHotJob -= 1;
      this.store.dispatch(JobActions.getByHotJobAtHome({ page: this.pageHotJob, limit: 9}));
    }
  }

  nextPageByField(): void {
    this.pageByField += 1;
    this.store.dispatch(JobActions.getByFieldAtHome({field: this.candidateToRender.Field._id, page: this.pageByField, limit: 9}));
  }

  previousPageByField(): void {
    if (this.pageByField > 0) {
      this.pageByField -= 1;
      this.store.dispatch(JobActions.getByFieldAtHome({field:this.candidateToRender.Field._id, page: this.pageByField, limit: 9}));
    }
  }

  nextPageByCareer(): void {
    this.pageByCareer += 1;
    this.store.dispatch(JobActions.getByCareerAtHome({career:this.candidateToRender.Career._id, page: this.pageByCareer, limit: 9}));
  }

  previousPageByCareer(): void {
    if (this.pageByCareer > 0) {
      this.pageByCareer -= 1;
      this.store.dispatch(JobActions.getByCareerAtHome({career:this.candidateToRender.Career._id, page: this.pageByCareer, limit: 9}));
    }
  }

  nextPageOfField(): void {
    this.pageOfField += 1;
    this.store.dispatch(FieldActions.getFieldAtHome({page: this.pageOfField, limit: 5}));
    
  }

  previousPageOfField(): void {
    if (this.pageOfField > 0) {
      this.pageOfField -= 1;
      this.store.dispatch(FieldActions.getFieldAtHome({page: this.pageOfField, limit: 5}));
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

    navigateToJobDetail(jobId: string) {
      this.router.navigate(['/job-detail',{
        jobId: jobId
      }]);
    }

    navigateToCompanyDetail(companyId: string) {
      this.router.navigate(['/company-detail',{
        companyId: companyId
      }]);
    }
    navigateToJobs(fieldId: string) {
      this.router.navigate(['/job',{
        fieldId: fieldId
      }]);
    }

    
    
}
