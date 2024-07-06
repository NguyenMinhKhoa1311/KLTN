import { Component, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { Router } from '@angular/router';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { Candidate } from '../../../models/candidate.model';
import { Subscription } from 'rxjs';
import { TuiAlertService } from '@taiga-ui/core';


@Component({
  selector: 'app-favourite-job',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './favourite-job.component.html',
  styleUrl: './favourite-job.component.less'
})
export class FavouriteJobComponent implements OnDestroy{
  subscriptions: Subscription[] = [];
  //variables
  candidateToRender: Candidate = <Candidate>{};
  skip: number = 6;
  start: number = 0;
  end: number = 6;
  isLogin: boolean = false;
  //ngrx of candidate
  candidateTakenByIdAtFavoriteJob$ = this.store.select('candidate', 'candidateTakenByIdAtFavoriteJob');
  constructor(
    private store: Store<{
      candidate: candidateState,
    }>,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) {
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
      this.isLogin = true;
      this.store.dispatch(CandidateActions.getByIdAtFavoriteJob({id:userAfterParse._id}));
      this.subscriptions.push(
        this.candidateTakenByIdAtFavoriteJob$.subscribe(candidate => {
          if(candidate._id){
            this.candidateToRender = candidate;
          }
        })
      )
    }}else{
      this.alerts
      .open('', {label: 'Vui lòng đăng nhập',status:'info'})
      .subscribe();
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  nextPage(){
    const newStart = this.start + this.skip;
    const newEnd = this.end + this.skip;
    if(this.candidateToRender.FavoriteJobs.length > newEnd || this.candidateToRender.FavoriteJobs.length > newStart){
      this.start += this.skip;
      this.end += this.skip;
    }else{
      this.alerts
      .open('', {label: 'Không còn công việc nào',status:'info'})
      .subscribe();
    }

  }
  previousPage(){
    this.start -= this.skip;
    this.end -= this.skip;
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
}
