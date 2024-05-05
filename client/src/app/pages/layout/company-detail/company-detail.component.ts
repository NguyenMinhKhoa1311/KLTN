import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import { CompanyState } from '../../../ngrx/states/company.state';
import { ActivatedRoute } from '@angular/router';
import * as CompanyActions from '../../../ngrx/actions/company.actions';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Company } from '../../../models/company.model';
import { Job } from '../../../models/job.model';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.less'
})
export class CompanyDetailComponent implements OnDestroy {

  subscriptions: Subscription[] = [];
  // variables
  companyId: string = "";
  companyToRender: Company = <Company>{};
  jobsToRender: Job[] = [];



  //ngrx of company
  companyTakenByGetByIdAtCompanyDetail$ = this.store.select('company', 'companyTakenByGetByIdAtCompanyDetail');


  //ngrx of job
  jobsTakenByCompanyAtCompanyDetail$ = this.store.select('job', 'jobsTakenByCompanyAtCompanyDetail');





  constructor(
    private store: Store<{ job: jobState, company: CompanyState }>,
    private route: ActivatedRoute,
  ) { 
    this.companyId =this.route.snapshot.paramMap.get('companyId')??"";
    console.log("companyId: ", this.companyId);
    this.store.dispatch(CompanyActions.getBy_IdAtCmopanyDetail({ id: this.companyId }));
    this.store.dispatch(JobActions.getByCompanyAtCompanyDetail({ company: this.companyId,page: 0, limit: 9}));

    this.subscriptions.push(
      this.companyTakenByGetByIdAtCompanyDetail$.subscribe((company) => {
        if(company!= undefined){
          if(company._id!="500"){
            this.companyToRender = company;
            console.log("companyToRender: ", this.companyToRender);
          }
        }
      }),
      this.jobsTakenByCompanyAtCompanyDetail$.subscribe((jobs) => {
        if(jobs.length>0){
          this.jobsToRender = jobs;
          console.log("jobsToRender: ", this.jobsToRender);
        }
      })

    );

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
