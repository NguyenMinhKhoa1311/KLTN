import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { RecruitmentState } from '../../../ngrx/states/recruitment.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Candidate } from '../../../models/candidate.model';
import * as RecruitmentActions from '../../../ngrx/actions/recruitment.actions';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Recruitment } from '../../../models/recruitment.model';
import { parseDate } from '../../../../environments/environments';
import { jobState } from '../../../ngrx/states/job.state';
import { Job } from '../../../models/job.model';

@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './job-apply.component.html',
  styleUrl: './job-apply.component.less'
})

export class JobApplyComponent implements OnDestroy{

  subscriptions: Subscription[] = [];

  //variables
  page: number = 0;
  recruitments: Recruitment[] = [];
  jobToRender: Job = <Job>{};
  isGetJobByApplyJob: boolean = false;

  
  //ngrx of recruitment
  recruitmentGetByCandidate$ = this.store.select('recruitment','recruitmentsTakenByCandidate')
  
  //ngrx of job
  jobTakenByJobIdAtApplyJob$ = this.store.select('job','jobTakenByJobIdAtApplyJob');

  parseDateInComponent(date: Date) {
    return parseDate(date);
  }
  
  constructor(
    private store: Store<{
      recruitment: RecruitmentState;
      job: jobState;
    }>,
    private router: Router
  ){
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        console.log(userAfterParse);
        this.store.dispatch(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate({ candidate: userAfterParse?._id,  page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc' }))
      }
    };
    this.subscriptions.push(
      this.recruitmentGetByCandidate$.subscribe((recruitments) => {
        if(recruitments.length > 0){
          this.recruitments = recruitments;
          console.log(this.recruitments);
          
        }
      }),
      this.jobTakenByJobIdAtApplyJob$.subscribe((job) => {
        if(job.JobId!=undefined){
          if(!this.isGetJobByApplyJob){
            this.isGetJobByApplyJob = true;
          }
          this.jobToRender = job;
          console.log(this.jobToRender);
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openDetailDialog(job:Job) {
    this.store.dispatch(JobActions.getByJobIdAtApplyJob({id: job.JobId}));
    //console.log(job);
    this.detailDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }
}
