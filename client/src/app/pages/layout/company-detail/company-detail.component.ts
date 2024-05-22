import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import { CompanyState } from '../../../ngrx/states/company.state';
import { ActivatedRoute, Router } from '@angular/router';
import * as CompanyActions from '../../../ngrx/actions/company.actions';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Company } from '../../../models/company.model';
import { Job } from '../../../models/job.model';
import { ShareModule } from '../../../shared/shared.module';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { Candidate } from '../../../models/candidate.model';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import {TuiSvgModule} from '@taiga-ui/core'

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [ShareModule,TuiSvgModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.less'
})
export class CompanyDetailComponent implements OnDestroy {

  subscriptions: Subscription[] = [];
  // variables
  companyId: string = "";
  companyToRender: Company = <Company>{};
  jobsToRender: Job[] = [];
  isUpdatedFavoriteJob: boolean = false;
  isDeletedFavoriteJob: boolean = false;
  candidateLogged: Candidate = <Candidate>{};
  token: string = "";



  //ngrx of company
  companyTakenByGetByIdAtCompanyDetail$ = this.store.select('company', 'companyTakenByGetByIdAtCompanyDetail');


  //ngrx of job
  jobsTakenByCompanyAtCompanyDetail$ = this.store.select('job', 'jobsTakenByCompanyAtCompanyDetail');

  //ngrx of candidate
    //ngrx of candidate
    candidateUpdatedFavoriteJob$ = this.store.select('candidate','candidateUpdatedFavoriteJobAtCompanyDetail');
    candidateDeletedFavoriteJob$ = this.store.select('candidate','candidateDeletedFavoriteJobAtCompanyDetail');



  constructor(
    private store: Store<{ job: jobState, company: CompanyState, candidate: candidateState }>,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    let token = sessionStorage.getItem('tokenOfCandidate');
    if(token){
      this.token = token;
      console.log("token: ", this.token);
      
    }
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.candidateLogged = userAfterParse;
        console.log(this.candidateLogged);
        
      }
    }
    this.companyId =this.route.snapshot.queryParamMap.get('company')??"";
    console.log("company: ", this.companyId);
    this.store.dispatch(CompanyActions.getBy_IdAtCmopanyDetail({ id: this.companyId }));
    this.store.dispatch(JobActions.getByCompanyAtCompanyDetail({ company: this.companyId,page: 0, limit: 9}));

    this.subscriptions.push(
      //subscribe company taken by getbyid
      this.companyTakenByGetByIdAtCompanyDetail$.subscribe((company) => {
        if(company!= undefined){
          if(company._id!="500"){
            this.companyToRender = company;
            console.log("companyToRender: ", this.companyToRender);
          }
        }
      }),
      //subscribe job taken by company
      this.jobsTakenByCompanyAtCompanyDetail$.subscribe((jobs) => {
        if(jobs.length>0){
          this.jobsToRender = jobs;
          console.log("jobsToRender: ", this.jobsToRender);
        }
      }),
      //subscribe candidate updated favorite job
      this.candidateUpdatedFavoriteJob$.subscribe((candidate) => {
        console.log("candidate: ", candidate);
        
        if(this.isUpdatedFavoriteJob){
          if(candidate._id !="500"){
            this.candidateLogged = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
            console.log("candidateLogged: ", this.candidateLogged);
            
          }
        }
      }),
      //subscribe candidate deleted favorite job
      this.candidateDeletedFavoriteJob$.subscribe((candidate) => {
        if(this.isDeletedFavoriteJob){
          if(candidate._id !="500"){
            this.candidateLogged = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
          }
        }
      })

    );

  }

    //check favorite
    checkFavoriteJob(job: Job){
      let isFavorite = 'iconHeartNotFilled';
      if(this.candidateLogged.FavoriteJobs ==undefined){
        return isFavorite;
      }
      else{    
        this.candidateLogged.FavoriteJobs.forEach(favoriteJob => {
          if(favoriteJob._id == job._id){
            isFavorite = 'iconHeartFilled';
          }
        });      
        return isFavorite;
      }
    }
  
    updatedAndDeleteFavoriteJob(job: Job){
      if(this.candidateLogged._id!=undefined){
        console.log("JOB: ", job);
        
        
        if(!this.isUpdatedFavoriteJob){
          this.isUpdatedFavoriteJob = true;
        }
        let result = this.checkFavoriteJob(job);
        console.log("result: ", result);
        
        if(result == 'iconHeartFilled'){
          console.log(this.isDeletedFavoriteJob);
          
          if(!this.isDeletedFavoriteJob){
            this.isDeletedFavoriteJob = true;
          }
          this.store.dispatch(CandidateActions.deleteFavoriteJobAtCompanyDetail({id:this.candidateLogged._id,jobId: job._id, token: this.token}));
        }else if(result == 'iconHeartNotFilled'){
          if(this.isUpdatedFavoriteJob){
            this.isUpdatedFavoriteJob = true;
          }
          this.store.dispatch(CandidateActions.updateFavoriteJobsAtCompanyDetail({id:this.candidateLogged._id,jobId: job._id, token: this.token}));
        }
      }
      else{
        this.router.navigate(['/login']);
      }
    }

  navigateToJobDetail(jobId: string) {
    this.router.navigate(['/job-detail'], {
      queryParams: { job: jobId }
    });
  }
  navigateToJobs(tag: string) {
    this.router.navigate(['/job'], {
      queryParams: { tag: tag }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(CompanyActions.resetState());
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
