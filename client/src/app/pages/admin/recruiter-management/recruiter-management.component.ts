import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { BanState } from '../../../ngrx/states/ban.state';
import { TuiAlertService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import * as RecruiterActions from '../../../ngrx/actions/recruiter.actions';
import * as BanActions from '../../../ngrx/actions/ban.actions';
import { Recruiter } from '../../../models/recruiter.model';
import { generateUuid, parseDate } from '../../../../environments/environments';

@Component({
  selector: 'app-recruiter-management',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './recruiter-management.component.html',
  styleUrl: './recruiter-management.component.less'
})
export class RecruiterManagementComponent implements OnDestroy{

  //variables
  recruitersToRender: Recruiter[] = [];
  recruiterToRender: Recruiter = <Recruiter>{};
  recruiterToBan: Recruiter = <Recruiter>{};

  subscriptions: Subscription[] = [];

  //ngrx of recruiter
  recruiters$ = this.store.select('recruiter', 'recruitersTakenAllAtManageRecruiter');

  //ngrx of ban
  isBanSuccess$ = this.store.select('ban', 'isBanUserAtManageRecruiterSuccess');
  banError$ = this.store.select('ban', 'banUserAtManageRecruiterError');

  constructor(
    private readonly store: Store<{ 
      recruiter: RecruiterState,
      ban: BanState 
    }>,
    private readonly alerts: TuiAlertService,
  ) {
    this.store.dispatch(RecruiterActions.getAllAtManageRecruiter());
    this.subscriptions.push(
        this.recruiters$.subscribe(recruiters => {
          
          if (recruiters.length) {
            this.recruitersToRender = recruiters;
          }
        }),
        this.isBanSuccess$.subscribe(isBanSuccess => {
          console.log(isBanSuccess);
          
          if (isBanSuccess) {
            this.closeRecruiterDialog();
            this.alerts
          .open('', {label: 'Đã cấm nhà tuyển dụng thành công',status:'info'})
          .subscribe();
          }
        }),
        this.banError$.subscribe(error => {
          if (error.length) {
            this.closeRecruiterDialog();
            this.alerts
            .open('', {label: 'Có lỗi xảy ra',status:'error'})
            .subscribe();
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  parseDateInComponent(date: Date) {
    return parseDate(date);
  }


  banRecruiter() {
    const ban: any ={
      BanId: generateUuid(),
      Recruiter: this.recruiterToBan._id,
      Date: new Date(),
      Reason: 'Reason',
    }
    this.store.dispatch(BanActions.banUserAtManageRecruiter({ban}));
  }


  @ViewChild('recruiterDialog', { static: true })
  recruiterDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openRecruiterDialog(recruiter: Recruiter) {
    this.recruiterDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
    this.recruiterToBan = recruiter;
  }
  closeRecruiterDialog() {
    this.recruiterDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }



  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);

  //open detail dialog
  openDetailDialog(recruiter :Recruiter) {
    this.recruiterToRender = recruiter;
    this.detailDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
    this.recruiterToRender = recruiter;
  }
  // close detail dialog
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr2.detectChanges();
  }
}
