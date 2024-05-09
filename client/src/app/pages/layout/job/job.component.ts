import { Component,ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { Store } from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiAlertService} from '@taiga-ui/core';


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
import { ActivatedRoute, Router } from '@angular/router';
import { candidateState } from '../../../ngrx/states/candidate.state';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { Candidate } from '../../../models/candidate.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  
})
export class JobComponent implements OnDestroy{

  subscriptions: Subscription[] = [];


  //variables
  isGetByLocation: boolean = false;
  isGetByFieldName: boolean = false;
  isGetByCareer: boolean = false;
  isGetAll: boolean = false;
  isGetByKeyword: boolean = false;
  isGetByTag: boolean = false;
  isGetAllAndSortSuccess: boolean = false;
  isGetByKeywordSuccess: boolean = false;
  isGetByCareerSuccess: boolean = false;
  isGetByFieldNameSuccess: boolean = false;
  isGetByLocationSuccess: boolean = false;
  isGetByTagSuccess: boolean = false;
  isGetByKeywordWithUrgentSuccess: boolean = false;
  isGetByLocationWithUrgentSuccess: boolean = false;
  isGetByFieldWithUrgentSuccess: boolean = false;
  isGetByFieldNameWithUrgentSuccess: boolean = false;
  isGetByCareerWithUrgentSuccess: boolean = false;
  isGetAllAndSortWithUrgentSuccess: boolean = false;
  isGetByTagWithUrgentSuccess: boolean = false;
  tagValue: string = "";

  isGetByFieldNameAddNavigate: boolean = false;



  page: number = 0;
  field: string = "";
  career: string = "";
  isUpdatedFavoriteJob: boolean = false;
  isDeletedFavoriteJob: boolean = false;
  jobToRender: Job[] = [];
  fieldList: readonly string[] = [];
  careerList: readonly string[] = [];
  candidateLogged: Candidate = <Candidate>{};


  // ngrx of job
  isGetAllAndSortAtJobSuccess$ = this.store.select('job', 'isGetAllAndSortAtJobSuccess');
  jobsTakenByAllAndSort$ = this.store.select('job', 'JobTakenBygetAllAndSortAtJob');
  isGetByFieldNameSuccess$ = this.store.select('job', 'isGetByFieldNameAtJobSuccess');
  jobTakenByFieldName$ = this.store.select('job', 'JobTakenByFieldNameAtJob');
  isGetByCareerSuccess$ = this.store.select('job', 'isGetByCareerNameAtJobSuccess');
  jobTakenByCareerName$ = this.store.select('job', 'JobTakenByCareerNameAtJob');
  isGetByLocationSuccess$ = this.store.select('job', 'isGetByLocationAtJobSuccess');
  jobTakenByLocation$ = this.store.select('job', 'jobsTakenByLocationAtJob');
  isGetByKeywordSuccess$ = this.store.select('job', 'isGetByKeywordAtJobSuccess');
  jobTakenByKeyword$ = this.store.select('job', 'jobsTakenByKeywordAtJob');
  isGetByTagSuccess$ = this.store.select('job', 'isGetByTagAtJobSuccess');
  jobTakenByTag$ = this.store.select('job', 'jobsTakenByTagAtJob');
  isGetByKeywordWithUrgentSuccess$ = this.store.select('job', 'isGetByKeywordWithUrgentAtJobSuccess');
  jobTakenByKeywordWithUrgent$ = this.store.select('job', 'jobsTakenByKeywordWithUrgentAtJob');
  isGetByLocationWithUrgentSuccess$ = this.store.select('job', 'isGetByLocationWithUrgentAtJobSuccess');
  jobTakenByLocationWithUrgent$ = this.store.select('job', 'jobsTakenByLocationWithUrgentAtJob');
  isGetByFieldWithUrgentSuccess$ = this.store.select('job', 'isGetByFieldWithUrgentAtJobSuccess');
  jobTakenByFieldWithUrgent$ = this.store.select('job', 'jobsTakenByFieldWithUrgentAtJob');
  isGetByFieldNameWithUrgentSuccess$ = this.store.select('job', 'isGetByFieldNameWithUrgentAtJobSuccess');
  jobTakenByFieldNameWithUrgent$ = this.store.select('job', 'jobsTakenByFieldNameWithUrgentAtJob');
  isGetByCareerWithUrgentSuccess$ = this.store.select('job', 'isGetByCareerNameWithUrgentAtJobSuccess');
  jobTakenByCareerNameWithUrgent$ = this.store.select('job', 'jobsTakenByCareerNameWithUrgentAtJob');
  isGetAllAndSortWithUrgentSuccess$ = this.store.select('job', 'isGetAllAndSortWithUrgentAtJobSuccess');
  jobsTakenByAllAndSortWithUrgent$ = this.store.select('job', 'jobsTakenByAllAndSortWithUrgentAtJob');
  isGetByTagWithUrgentSuccess$ = this.store.select('job', 'isGetByTagWithUrgentAtJobSuccess');
  jobTakenByTagWithUrgent$ = this.store.select('job', 'jobsTakenByTagWithUrgentAtJob');


  // ngrx of field
  fieldNoLimitAtJob$ = this.store.select('field','fieldNoLimitAtJob');

  //ngrx of career
  careersTakenByGetAllAtJob$ = this.store.select('career','careersTakenByGetAllAtJob');  
  careerTakenByFieldName$ = this.store.select('career','careersTakenByGetByFieldNameAtJob')

  //ngrx of candidate
  candidateUpdatedFavoriteJob$ = this.store.select('candidate','candidateUpdatedFavoriteJobAtJob');
  candidateDeletedFavoriteJob$ = this.store.select('candidate','candidateDeletedFavoriteJobAtJob');




  searchForm = new FormGroup({
    Keyword: new FormControl('', Validators.required),
  })



  constructor(
    private store: Store<{ job: jobState, field : FieldState, career : CareerState, candidate: candidateState }>,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private readonly alerts: TuiAlertService
  ){
    this.field = this.route.snapshot.paramMap.get('field')??"";
    this.career = this.route.snapshot.paramMap.get('career')??"";
    if(this.field.length > 0){
      this.isGetByFieldNameAddNavigate = true;
      this.isGetAll = false;
      this.isGetByFieldName = true;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.field, page: 0, limit: 9}));
    }else if(this.career.length == 0){
      this.isGetAll = true;
      this.isGetByFieldName = false;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9}));
    }
    if(this.career.length > 0){
      this.isGetAll = false;
      this.isGetByFieldName = false;
      this.isGetByCareer = true;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.career, page: 0, limit: 9}));
    }else if(this.field.length == 0){
      this.isGetAll = true;
      this.isGetByFieldName = false;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(CareerActions.getAllAtJobs());
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9}));
    }

    
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.candidateLogged = userAfterParse;
        console.log(this.candidateLogged);
        
      }
    }

    this.store.dispatch(FieldActions.getAllNoLimit());
    this.store.dispatch(CareerActions.getAllAtJobs());
    this.subscriptions.push(
      // subscribe to ngrx of isGetAllAndSortAtJobSuccess
      this.isGetAllAndSortAtJobSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetAllAndSortSuccess = isSuccess;
        }
      }),

      //subscribe to ngrx of getAllAndSortAtJob
      this.jobsTakenByAllAndSort$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetAll && this.isGetAllAndSortSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
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
      //subscribe to ngrx of isGetByFieldNameAtJobSuccess
      this.isGetByFieldNameSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByFieldNameSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByFieldNameAtJob
      this.jobTakenByFieldName$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        } else if(this.isGetByFieldName&&this.isGetByFieldNameSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),
      //subscribe to ngrx of isGetByCareerNameAtJobSuccess
      this.isGetByCareerSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByCareerSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByCareerNameAtJob
      this.jobTakenByCareerName$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        } else if(this.isGetByCareer&&this.isGetByCareerSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
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
      //subscribe to ngrx of isGetByLocationAtJobSuccess
      this.isGetByLocationSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByLocationSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByLocationdWithKeywordsAtJob
      this.jobTakenByLocation$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByLocation&&this.isGetByLocationSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),

      //subscribe to ngrx of isGetByTagAtJobSuccess
      this.isGetByTagSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByTagSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByTagAtJob
      this.jobTakenByTag$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByTag&&this.isGetByTagSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),


      //subscribe to ngrx of candidateUpdatedFavoriteJobAtJob
      this.candidateUpdatedFavoriteJob$.subscribe((candidate)=>{
        if(this.isUpdatedFavoriteJob){
          if(candidate._id !="500"){
            this.candidateLogged = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
          }
        }
      }),

      //subscribe to ngrx of candidateDeletedFavoriteJobAtJob
      this.candidateDeletedFavoriteJob$.subscribe((candidate)=>{
        if(this.isDeletedFavoriteJob){
          if(candidate._id !="500"){
            this.candidateLogged = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
          }
        }
      }),
      //subscribe to ngrx of isGetByKeywordAtJobSuccess
      this.isGetByKeywordSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByKeywordSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByKeywordAtJob
      this.jobTakenByKeyword$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByKeyword&&this.isGetByKeywordSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),

      //subscribe to ngrx of isGetByKeywordWithUrgentAtJobSuccess
      this.isGetByKeywordWithUrgentSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByKeywordWithUrgentSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByKeywordWithUrgentAtJob
      this.jobTakenByKeywordWithUrgent$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByKeyword&&this.isGetByKeywordWithUrgentSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),
      //subscribe to ngrx of isGetByLocationWithUrgentAtJobSuccess
      this.isGetByLocationWithUrgentSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByLocationWithUrgentSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByLocationWithUrgentAtJob
      this.jobTakenByLocationWithUrgent$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByLocation&&this.isGetByLocationWithUrgentSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),
      //subscribe to ngrx of isGetByTagWithUrgentAtJobSuccess
      this.isGetByTagWithUrgentSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByTagWithUrgentSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByTagWithUrgentAtJob
      this.jobTakenByTagWithUrgent$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByTag&&this.isGetByTagWithUrgentSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),
      //subscribe to ngrx of isGetByFieldNameWithUrgentAtJobSuccess
      this.isGetByFieldNameWithUrgentSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByFieldNameWithUrgentSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByFieldNameWithUrgentAtJob
      this.jobTakenByFieldNameWithUrgent$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByFieldName&&this.isGetByFieldNameWithUrgentSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),
      //subscribe to ngrx of isGetByCareerNameWithUrgentAtJobSuccess
      this.isGetByCareerWithUrgentSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByCareerWithUrgentSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByCareerNameWithUrgentAtJob
      this.jobTakenByCareerNameWithUrgent$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByCareer&&this.isGetByCareerWithUrgentSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      }),
      //subscribe to ngrx of isGetAllAndSortWithUrgentAtJobSuccess
      this.isGetAllAndSortWithUrgentSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetAllAndSortWithUrgentSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of jobsTakenByAllAndSortWithUrgentAtJob
      this.jobsTakenByAllAndSortWithUrgent$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetAll&&this.isGetAllAndSortWithUrgentSuccess){
          if(this.page>0){
            this.page--;
          }
          this.alerts
            .open('', {label: 'Không có công việc nào!',status:'warning'})
            .subscribe();
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
    JobActions.resetState();
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
      if(result == 'iconHeartFilled'){
        if(!this.isDeletedFavoriteJob){
          this.isDeletedFavoriteJob = true;
        }
        this.store.dispatch(CandidateActions.deleteFavoriteJobAtJob({id:this.candidateLogged._id,jobId: job._id}));
      }else if(result == 'iconHeartNotFilled'){
        if(this.isUpdatedFavoriteJob){
          this.isUpdatedFavoriteJob = true;
        }
        this.store.dispatch(CandidateActions.updateFavoriteJobsAtJob({id:this.candidateLogged._id,jobId: job._id}));
      }
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  getByTag(tag: string){
    if(this.UrgentForm.value.checked){
      if(!this.isGetByTag){
        this.isGetByTag = true;
      }
      this.tagValue = tag;
      this.store.dispatch(JobActions.getByTagWithUrgentAtJob({tag: tag, page: 0, limit: 9, urgent: true}));
    }else{
      if(!this.isGetByTag){
        this.isGetByTag = true;
      }
      this.tagValue = tag;
      this.store.dispatch(JobActions.getByTagAtJob({tag: tag, page: 0, limit: 9}));
    }
  }


  fieldValue: any;
  onFieldValueChange() {
    console.log("Giá trị đã chọn là: ", this.fieldValue);
    if(this.fieldValue != null){
      this.isGetAll = false;
      this.isGetByFieldName = true;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      if(this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.fieldValue, page: 0, limit: 9, urgent: true}));
      }
      else{
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9}));
      }
      this.store.dispatch(CareerActions.getByFieldNameAtJob({fieldName: this.fieldValue}));
    }else{
      this.isGetAll = true;
      this.isGetByCareer = false;
      this.isGetByFieldName = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      this.store.dispatch(CareerActions.getAllAtJobs());
      if(this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getAllAndSortWithUrgentAtJob({page: 0, limit: 9, urgent: true}));
      }else{
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9}));
      }
    }
  }

  careerValue:any;
  onCareerValueChange(){
    console.log("Giá trị đã chọn là: ", this.careerValue);
    if(this.careerValue != null){
      this.isGetAll = false;
      this.isGetByCareer = true;
      this.isGetByFieldName = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      if(this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByCareerNameWithUrgentAtJob({careerName: this.careerValue, page: 0, limit: 9, urgent: true}));
      }
      else{
        this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: 0, limit: 9}));
      }
    }else{
      this.isGetAll = true;
      this.isGetByCareer = false;
      this.isGetByFieldName = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      if(this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9}));
      }else{
        this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9}));
      }


    }
  }
  
  locationValue = '';
  locationValueChange(){
    console.log("Giá trị đã chọn là: ", this.locationValue);
    if(this.locationValue != null){
      this.isGetAll = false;
      this.isGetByFieldName = false;
      this.isGetByCareer = false;
      this.isGetByLocation = true;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      if(this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByLocationdWithKeywordsWithUrgentAtJob({location: this.locationValue, page: 0, limit: 9, urgent: true}));
      }else{
        this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: 0, limit: 9}));
      }
    }else{
      if(this.page>0){
        this.page = 0;
      }
      this.isGetAll = true;
      this.isGetByFieldName = false;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getAllAndSortWithUrgentAtJob({page: 0, limit: 9, urgent: true}));
      }else{
        this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9}));
      }
    }
  }

  searchByKeyword():void {
    this.isGetAll = false;
    this.isGetByFieldName = false;
    this.isGetByCareer = false;
    this.isGetByLocation = false;
    this.isGetByKeyword = true;
    if(this.page>0){
      this.page = 0;
    }
    if(this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByKeywordWithUrgentAtJob({keyword: this.searchForm.value.Keyword??"", page: 0, limit: 9, urgent: true}));
    }else{
      this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: 0, limit: 9}));
    }
  }

  nextJobs(){
    this.page++;
    if(this.isGetByCareer && !this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: this.page, limit: 9}));
    } else if(this.isGetByLocation && !this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: this.page, limit: 9}));
    }else if(this.isGetByKeyword && !this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9}));
    }else if(this.isGetAll && !this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9}));
    } else if(this.isGetByFieldName && !this.UrgentForm.value.checked){
      if(this.isGetByFieldNameAddNavigate){
        this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.field, page: this.page, limit: 9}));
      }else{
        this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: this.page, limit: 9}));
      }

    }else if(this.isGetByTag && !this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByTagAtJob({tag: this.tagValue, page: this.page, limit: 9}));
    } else if(this.isGetByCareer && this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByCareerNameWithUrgentAtJob({careerName: this.careerValue, page: this.page, limit: 9, urgent: true}));
    } else if(this.isGetByLocation && this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByLocationdWithKeywordsWithUrgentAtJob({location: this.locationValue, page: this.page, limit: 9, urgent: true}));
    } else if(this.isGetByKeyword && this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByKeywordWithUrgentAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9, urgent: true}));
    } else if(this.isGetAll && this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getAllAndSortWithUrgentAtJob({page: this.page, limit: 9, urgent: true}));
    } else if(this.isGetByFieldName && this.UrgentForm.value.checked){
      if(this.isGetByFieldNameAddNavigate){
        this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.field, page: this.page, limit: 9, urgent: true}));
      }else{
        this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.fieldValue, page: this.page, limit: 9, urgent: true}));
      }
    } else if(this.isGetByTag && this.UrgentForm.value.checked){
      this.store.dispatch(JobActions.getByTagWithUrgentAtJob({tag: this.tagValue, page: this.page, limit: 9, urgent: true}));
    }

  }
  previousJobs(){
    if(this.page > 0){
      this.page--;
      if(this.isGetByCareer && !this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: this.page, limit: 9}));
      }
      else if(this.isGetByLocation && !this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: this.page, limit: 9}));
      } 
      else if(this.isGetByKeyword && !this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9}));
      }
      else if(this.isGetAll && !this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9}));
      }
      else if(this.isGetByFieldName && !this.UrgentForm.value.checked){
        if(this.isGetByFieldNameAddNavigate){
          this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.field, page: this.page, limit: 9}));
        }else{
          this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: this.page, limit: 9}));
        }
      }
      else if(this.isGetByCareer && this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByCareerNameWithUrgentAtJob({careerName: this.careerValue, page: this.page, limit: 9, urgent: true}));
      }
      else if(this.isGetByLocation && this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByLocationdWithKeywordsWithUrgentAtJob({location: this.locationValue, page: this.page, limit: 9, urgent: true}));
      } 
      else if(this.isGetByKeyword && this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getByKeywordWithUrgentAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9, urgent: true}));
      } 
      else if(this.isGetAll && this.UrgentForm.value.checked){
        this.store.dispatch(JobActions.getAllAndSortWithUrgentAtJob({page: this.page, limit: 9, urgent: true}));
      } 
      else if(this.isGetByFieldName && this.UrgentForm.value.checked){
        if(this.isGetByFieldNameAddNavigate){
          this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.field, page: this.page, limit: 9, urgent: true}));
        }else{
          this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.fieldValue, page: this.page, limit: 9, urgent: true}));
        }
      }
    }

  }

  openSnackBar(message: any) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['snackbar'], 
    });
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
    "Yên Bái",
    "Hà Nội",
    "Hồ Chí Minh"
  ];

  navigateToJobDetail(jobId: string) {
    this.router.navigate(['/job-detail',{
      jobId: jobId
    }]);
  }


  onSelectionChange(_id: string) {
    console.log("Giá trị đã chọn là: ", _id);
  }

  checked(){
    if(!this.UrgentForm.value.checked){
      this.UrgentForm.setControl('checked', new FormControl(true));
      if(this.isGetAll){
        this.store.dispatch(JobActions.getAllAndSortWithUrgentAtJob({page: this.page, limit: 9, urgent: true}));
      }
      else if(this.isGetByFieldName){
        if(this.isGetByFieldNameAddNavigate){
          this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.field, page: this.page, limit: 9, urgent: true}));
        }else{
          this.store.dispatch(JobActions.getByFieldNameWithUrgentAtJob({fieldName: this.fieldValue, page: this.page, limit: 9, urgent: true}));
        }
      }
      else if(this.isGetByCareer){
        this.store.dispatch(JobActions.getByCareerNameWithUrgentAtJob({careerName: this.careerValue, page: this.page, limit: 9, urgent: true}));
      }
      else if(this.isGetByLocation){
        this.store.dispatch(JobActions.getByLocationdWithKeywordsWithUrgentAtJob({location: this.locationValue, page: this.page, limit: 9, urgent: true}));
      }
      else if(this.isGetByKeyword){
        this.store.dispatch(JobActions.getByKeywordWithUrgentAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9, urgent: true}));
      }
    }
    else{
      this.UrgentForm.setControl('checked', new FormControl(false));
      if(this.isGetAll){
        this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9}));
      }
      else if(this.isGetByFieldName){
        if(this.isGetByFieldNameAddNavigate){
          this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.field, page: this.page, limit: 9}));
        }else{
          this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: this.page, limit: 9}));
        }
      }
      else if(this.isGetByCareer){
        this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: this.page, limit: 9}));
      }
      else if(this.isGetByLocation){
        this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: this.page, limit: 9}));
      }
      else if(this.isGetByKeyword){
        this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9}));
      }
      
      
    }
    
  }

  UrgentForm = new FormGroup({
    checked: new FormControl(false),
  });


}
