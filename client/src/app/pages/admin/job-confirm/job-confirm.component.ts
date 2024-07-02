import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import { BillState } from '../../../ngrx/states/bill.state';
import { Subscription } from 'rxjs';
import * as JobActions from '../../../ngrx/actions/job.actions';
import * as BillActions from '../../../ngrx/actions/bill.actions';
import { Job } from '../../../models/job.model';
import { TuiAlertService } from '@taiga-ui/core';
import { generateUuid, parseDate } from '../../../../environments/environments';

@Component({
  selector: 'app-job-confirm',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './job-confirm.component.html',
  styleUrl: './job-confirm.component.less'
})
export class JobConfirmComponent implements OnDestroy{

  subscriptions: Subscription[] = [];
  isGetByStatusPaymentSuccess: boolean = false;

  //variables
  jobsToRender: Job[] = [];
  jobToRender: Job = <Job>{};
  page: number = 0;
  isOpenDialog: boolean = false;
  token: string = "";



  //ngrx of job
  jobTakenByStatusPayment$ = this.store.select("job", "jobsTakenByStatusPaymentAtConfirmJob");
  isGetByStatusPaymentSuccess$ = this.store.select("job", "isGetByStatusPaymentAtConfirmJobSuccess");

  //ngrx of bill
  billCreatedAtJobConfirm$ = this.store.select("bill", "billCreatedAtJobConfirm");


  constructor(
    private store: Store<{job: jobState, bill: BillState}>,
    private readonly alerts: TuiAlertService,
  ) {
    let token = sessionStorage.getItem('tokenOfAdmin');
    if(token){
      this.token = token;
      console.log(this.token);
      
    }
    this.store.dispatch(JobActions.getByStatusPaymentAtConfirmJob({status: false,page: this.page, limit: 10}));
    
    this.subscriptions.push(
      this.isGetByStatusPaymentSuccess$.subscribe((status)=>{
        this.isGetByStatusPaymentSuccess = status;
      }),
      this.jobTakenByStatusPayment$.subscribe((jobs)=>{
        if(jobs.length){
          this.jobsToRender = jobs;
        }else if(this.isGetByStatusPaymentSuccess){
          this.page--;
          this.alerts
          .open('', {label: 'Không còn công việc nào',status:'info'})
          .subscribe();
        }
      }),
      this.billCreatedAtJobConfirm$.subscribe((bill)=>{
        if(bill._id){
          this.alerts
          .open('', {label: 'Xác nhận thành công',status:'success'})
          .subscribe();
          this.store.dispatch(JobActions.getByStatusPaymentAtConfirmJob({status: false,page: 0, limit: 10}));
          this.closeVisibilityDialog();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  seeDetailJob(job: Job){
    console.log(job);
    
    this.jobToRender = job;
    this.isOpenDialog = true;
    this.openreVisibilityDialog();
  }

  parseDateInComponent(date: Date) {
    return parseDate(date);
  }
  confirmJob(){
    const bill = {
      BillId: generateUuid(),
      Voucher: "6642b2cebcf7b121f84366d3",
      Job: this.jobToRender._id,
      ServicePackage:this.jobToRender.ServicePackage._id,
      Total: this.jobToRender.ServicePackage.Price,
      Discount: 0,
      GrandTotal: this.jobToRender.ServicePackage.Price,
      DatePayment: new Date(),
      Recruiter: this.jobToRender.Recruiter,
      Field: this.jobToRender.Field._id,
      Company: this.jobToRender.Company._id,
      Career: this.jobToRender.Career._id,
    }
    this.store.dispatch(BillActions.createAtJobConfirm({bill: bill,token: this.token}));
  }

  @ViewChild('visibilityDialog', { static: true })
  visibilityDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);
  openreVisibilityDialog() {
    this.visibilityDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
  }
  closeVisibilityDialog() {
    this.visibilityDialog.nativeElement.close();
    this.cdr2.detectChanges();
  }
  nextPage(){
    this.page++;
    this.store.dispatch(JobActions.getByStatusPaymentAtConfirmJob({status: false,page: this.page, limit: 10}));
  }
  prevPage(){
    this.page--;
    this.store.dispatch(JobActions.getByStatusPaymentAtConfirmJob({status: false,page: this.page, limit: 10}));
  }

}
