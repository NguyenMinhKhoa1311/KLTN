import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import { Subscription } from 'rxjs';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Job } from '../../../models/job.model';
import { ShareModule } from '../../../shared/shared.module';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-job-all',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './job-all.component.html',
  styleUrl: './job-all.component.less'
})
export class JobAllComponent implements OnDestroy {

  subscriptions: Subscription[] = [];
  isBestJob: boolean = false;
  isHotJob: boolean = false;
  page: number = 0;
  type: string = '';
  isGetAllAndSortSuccess: boolean = false;
  isGetByHotJobSuccess: boolean = false;
  jobToRender: Job[] = [];

  //ngrx of jobs
  jobsTakenByAllAndSortByWelfareAndSalary$ = this.store.select('job', "jobsTakenByAllAndSortByWelfareAndSalaryAtSeeAll");
  isGetAllAndSortByWelfareAndSalarySuccess$ = this.store.select('job', 'isGetAllAndSortByWelfareAndSalaryAtSeeAllSuccess');
  jobsTakenByHotJob$ = this.store.select('job', 'jobsTakenByHotJobAtSeeAll');
  isGetByHotJobSuccess$ = this.store.select('job', 'isGetByHotJobAtSeeAllSuccess');

  constructor(
    private store: Store<{ job: jobState }>,
    private route: ActivatedRoute,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) {
    this.type = this.route.snapshot.queryParamMap.get('type') ?? '';
    if(this.type == 'viec-lam-tot-nhat'){
      this.isBestJob = true;
      this.store.dispatch(JobActions.getAllAndSortByWelfareAndSalaryAtSeeAll({ page: this.page, limit: 9 }));
    }else if(this.type == 'viec-lam-noi-bat')
    {
      this.isHotJob = true;
      this.store.dispatch(JobActions.getByHotJobAtSeeAll({ page: this.page, limit: 9 }));
    }

    this.subscriptions.push(
      this.isGetAllAndSortByWelfareAndSalarySuccess$.subscribe((res) => {
        this.isGetAllAndSortSuccess = res;
      }),
      this.jobsTakenByAllAndSortByWelfareAndSalary$.subscribe((jobs) => {
        if(jobs.length > 0){
          this.jobToRender = jobs;
        } else if(this.isGetAllAndSortSuccess){
          this.page--;
          this.alerts
          .open('', {label: 'Không còn công việc nào',status:'info'})
          .subscribe();
        }
      }),
      this.isGetByHotJobSuccess$.subscribe((res) => {
        this.isGetByHotJobSuccess = res;
      }),
      this.jobsTakenByHotJob$.subscribe((jobs) => {
        if(jobs.length > 0){
          this.jobToRender = jobs;
        } else if(this.isGetByHotJobSuccess){
          this.page--;
          this.alerts
          .open('', {label: 'Không còn công việc nào',status:'info'})
          .subscribe();
        }
      }),




    );
  }
  nextPage() {
    this.page++;
    if(this.isBestJob){
      this.store.dispatch(JobActions.getAllAndSortByWelfareAndSalaryAtSeeAll({ page: this.page, limit: 9 }));
    }else if(this.isHotJob){
      this.store.dispatch(JobActions.getByHotJobAtSeeAll({ page: this.page, limit: 9 }));
    }
  }
  prevPage() {
    if(this.page > 0){
      this.page--;
      if(this.isBestJob){
        this.store.dispatch(JobActions.getAllAndSortByWelfareAndSalaryAtSeeAll({ page: this.page, limit: 9 }));
      }else if(this.isHotJob){
        this.store.dispatch(JobActions.getByHotJobAtSeeAll({ page: this.page, limit: 9 }));
      }
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
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
