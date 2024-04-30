import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Job } from '../../../models/job.model';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { generateUuid, parseDate } from '../../../../environments/environments';
import { Candidate } from '../../../models/candidate.model';
import { StorageState } from '../../../ngrx/states/storage.state';
import * as StorageActions from '../../../ngrx/actions/storage.actions';

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
  isHavePdf : boolean = false;
  folderName: string = "";

  //ngrx of jobs
  jobTakenByIdAtJobDetailOfCandidate$ = this.store.select('job', 'jobTakenByIdAtJobDetailOfCandidate');
  jobUpdatedRecruitment$ = this.store.select('job', 'JobUpdatedRecruitmentAtJobDetail');


  //ngrx of storage
  isCreateStorageSuccess$ = this.store.select('storage', 'isCreateAtJobDetailsSuccess');
  storageTakenByFolderName$ = this.store.select('storage', 'fileTakenByFolderNameAtJobDetail');


  parseDateInComponent(date: Date) {
    return parseDate(date);
  }


  constructor(
    private route: ActivatedRoute,
    private store : Store<{job: jobState, storage: StorageState}>,
    ) {
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
        if(job._id!=undefined) {
          if(job._id != "500"){
              this.jobToRender = job;
              console.log("jobToRender: ", this.jobToRender);
          }
        }
      }),
      this.isCreateStorageSuccess$.subscribe(isCreateStorageSuccess => {
        if(isCreateStorageSuccess){
          this.store.dispatch(StorageActions.getByFolderNameAtJobDetail({folderName: this.folderName}));
        }
      }),
      this.storageTakenByFolderName$.subscribe(storage => {
        if(storage._id!=undefined){
          if(storage._id != "500"){
            const recruitmentToCreate = {
              RecruitmentId: generateUuid(),
              Job: this.jobToRender._id,
              Candidate: this.userLogged._id,
              Recruiter: this.jobToRender.Recruiter._id,
              Company: this.jobToRender.Company._id,
              StatusSeenOfRecruiter: false,
              Status: false,
              StatusCancel: false,
              DateApply: new Date(),
              Career: this.jobToRender.Career._id,
              Field: this.jobToRender.Field._id,
              DateInterview: new Date(),
              StorageCV: storage._id,
              CV: storage.urls[0]

            }
            console.log("storage: ", storage);
            this.store.dispatch(JobActions.updateRecruitmentAtJobDetail({recruitment: recruitmentToCreate,id: this.jobToRender._id}));
          }
        }
      }),
      this.jobUpdatedRecruitment$.subscribe(job => {
        if(job._id!=undefined){
          if(job._id != "500"){
            alert("Ứng tuyển thành công!");
            this.closeApplyDialog();
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
      if(!this.isHavePdf){
        this.isHavePdf = true;
      }

    }
    else{
      alert('Vui lòng chọn tệp PDF.');
      return; // Thoát khỏi hàm nếu không phải PDF
    }
    console.log(this.filePdf);
  }

  apply(){
    if(this.isHavePdf){
      this.folderName = "CV of"+this.userLogged.Name;
      this.store.dispatch(StorageActions.createAtJobDetails({file: this.filePdf, fileName: this.folderName}));
    }

  }

  checkApply(){ 
    let isApplied = false;
    if(this.userLogged._id!=undefined){
      if(this.jobToRender.Recruitment!=undefined && this.jobToRender.Recruitment.length>0){
        this.jobToRender.Recruitment.forEach((recruitment) => {
          const checkId = recruitment.Candidate.toString();
          if( checkId == this.userLogged._id){            
            isApplied = true;
          }
        });
      }
    }    
    return isApplied;
  }

}
