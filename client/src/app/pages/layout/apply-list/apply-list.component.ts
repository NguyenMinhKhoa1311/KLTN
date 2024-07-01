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
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-apply-list',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './apply-list.component.html',
  styleUrl: './apply-list.component.less'
})
export class ApplyListComponent implements OnDestroy{
  subscriptions: Subscription[] = [];

  //variables
  page: number = 0;
  recruitments: Recruitment[] = [];
  jobToRender: Job = <Job>{};
  isGetJobByApplyJob: boolean = false;
  candidateLogin: Candidate = <Candidate>{};
  isGetRecruitmentByCandidateSuccess: boolean = false;
  isLogin: boolean = false;
  
  //ngrx of recruitment
  isGetRecruitmentByCandidateSuccess$ = this.store.select('recruitment','isGetByCandidateSuccess');
  recruitmentGetByCandidate$ = this.store.select('recruitment','recruitmentsTakenByCandidate')
  isUpdateStatusCancelSuccess$ = this.store.select('recruitment','isUpdateStatusCancelAtApplyJobSuccess');
  
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
    private router: Router,
    private readonly alerts: TuiAlertService,
  ){
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.isLogin = true;
        console.log(userAfterParse);
        this.candidateLogin = userAfterParse;
        this.store.dispatch(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate({ candidate: userAfterParse?._id,  page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc' }))
      }
    }else{
      this.isLogin = false;
      this.alerts
      .open('', {label: 'Vui lòng đăng nhập',status:'info'})
      .subscribe();
    };
    this.subscriptions.push(
      // theo dõi trạng thái lấy recruitment thành công
      this.isGetRecruitmentByCandidateSuccess$.subscribe((res) => {
        this.isGetRecruitmentByCandidateSuccess = res;
      }),
      // theo dõi recruiterment của candidate
      this.recruitmentGetByCandidate$.subscribe((recruitments) => {
        if(recruitments.length > 0){
          this.recruitments = recruitments;
          console.log(this.recruitments);
        }else if(this.isGetRecruitmentByCandidateSuccess){
          this.page--;
          this.alerts
          .open('', {label: 'Không còn công việc nào',status:'info'})
          .subscribe();
        }
      }),
      // theo dõi việc làm của creacruitment
      this.jobTakenByJobIdAtApplyJob$.subscribe((job) => {
        if(job.JobId!=undefined){
          if(!this.isGetJobByApplyJob){
            this.isGetJobByApplyJob = true;
          }
          this.jobToRender = job;
          console.log(this.jobToRender);
        }
      }),
      // theo dõi cập nhật trạng thái hủy recruitment
      this.isUpdateStatusCancelSuccess$.subscribe((isSuccess) => {
        if(isSuccess){
          this.store.dispatch(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate({ candidate: this.candidateLogin?._id,  page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc' }))
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  nextpage(){
    this.page++;
    this.store.dispatch(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate({ candidate: this.candidateLogin?._id,  page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc' }))
  }
  prevPage(){
    if(this.page > 0){
      this.page--;
      this.store.dispatch(RecruitmentActions.getByCandidasteAtAplicationListOfCandidate({ candidate: this.candidateLogin?._id,  page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc' }))
    }
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
  cancelRecruitment(jobId: string){
    this.store.dispatch(RecruitmentActions.updateStatusCancelAtApplyJob({id: jobId, status: true}));
  }

  index_item = 0;
}
