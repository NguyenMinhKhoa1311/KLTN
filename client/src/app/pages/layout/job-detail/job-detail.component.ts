import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Job } from '../../../models/job.model';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { parseDate } from '../../../../environments/environments';
import { Candidate } from '../../../models/candidate.model';

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
  isLogin = false;
  userLogged : Candidate = <Candidate>{};
  jobToRender: Job = <Job>{};

  //ngrx of jobs
  jobTakenByIdAtJobDetailOfCandidate$ = this.store.select('job', 'jobTakenByIdAtJobDetailOfCandidate');


  parseDateInComponent(date: Date) {
    return parseDate(date);
  }


  constructor(private route: ActivatedRoute,  private store : Store<{job: jobState}>,) {
    this.jobId = this.route.snapshot.paramMap.get('jobId')??"";
    console.log("jobId: ", this.jobId);
    this.store.dispatch(JobActions.getJobByIdAtJobDetailOfCandidate({id: this.jobId}));
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged);
      if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse!="null"&&userAfterParse!="undefined"&&userAfterParse?._id!=""){
        console.log('userLogged',userLogged);
        this.isLogin = true;
        this.userLogged = userAfterParse;
      }
    }
    this.subscriptions.push(
      this.jobTakenByIdAtJobDetailOfCandidate$.subscribe(job => {
        console.log("job: ", job);
        if(job!=undefined) {
          if(job._id != "500"){
              this.jobToRender = job;
              console.log("jobToRender: ", this.jobToRender);
              
          }
        }
      }),
      
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  applyJob(Job:String){
    
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

  selectedPdf: File | null = null;
  selectedPdfName: string | null = null;
  formPdf: FormData = new FormData();
  filePdf: any;
  @ViewChild('fileInput') filePdfInput!: ElementRef<HTMLInputElement>;

  onFilePdfSelected(event: any) {
    const filePdf: File = event.target.files[0];
    if (filePdf.type.startsWith('application/pdf')) {
      this.formPdf.append('pdf', filePdf, filePdf.name);
      this.filePdf = filePdf;
      this.selectedPdfName = filePdf.name;
    }
    else{
      alert('Vui lòng chọn tệp PDF.');
      return; // Thoát khỏi hàm nếu không phải PDF
    }
    console.log(this.filePdf);
  }

}
