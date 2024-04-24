import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Job } from '../../../models/job.model';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [ShareModule,TaigaModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.less'
})
export class JobDetailComponent implements OnDestroy {
  
  subscriptions: Subscription[] = [];

  // variables
  jobId: string = "";

  jobToRender: Job = <Job>{};

  //ngrx of jobs
  jobTakenByIdAtJobDetailOfCandidate$ = this.store.select('job', 'jobTakenByIdAtJobDetailOfCandidate');


  constructor(private route: ActivatedRoute,  private store : Store<{job: jobState}>,) {
    this.jobId = this.route.snapshot.paramMap.get('jobId')??"";
    console.log("jobId: ", this.jobId);
    this.store.dispatch(JobActions.getJobByIdAtJobDetailOfCandidate({id: this.jobId}));

    this.subscriptions.push(
      this.jobTakenByIdAtJobDetailOfCandidate$.subscribe(job => {
        console.log("job: ", job);
        
        if(job!=undefined) {
          if(job._id != "500"){
              this.jobToRender = job;
              console.log("jobToRender: ", this.jobToRender);
              
          }
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  @ViewChild('applyDialog', { static: true })
  applyDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openApplyDialog() {
    this.applyDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeApplyDialog() {
    this.applyDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }


}
