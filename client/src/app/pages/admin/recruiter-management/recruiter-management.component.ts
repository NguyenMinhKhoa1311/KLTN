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
  banToUnBan: any = {};
  isBan: boolean = false;
  token: string = "";


  subscriptions: Subscription[] = [];

  //ngrx of recruiter
  recruiters$ = this.store.select('recruiter', 'recruitersTakenAllAtManageRecruiter');

  //ngrx of ban
  isBanSuccess$ = this.store.select('ban', 'isBanUserAtManageRecruiterSuccess');
  banError$ = this.store.select('ban', 'banUserAtManageRecruiterError');
  banTakenByRecruiter$ = this.store.select('ban', 'banTakenByRecruiterAtManageRecruiter');
  isUnBanSuccess$ = this.store.select('ban', 'unBanUserAtManageRecruiterSuccess');



  constructor(
    private readonly store: Store<{ 
      recruiter: RecruiterState,
      ban: BanState 
    }>,
    private readonly alerts: TuiAlertService,
  ) {
    let token = sessionStorage.getItem('tokenOfAdmin');
    if(token){
      this.token = token;
      console.log(this.token);
      this.store.dispatch(RecruiterActions.getAllAtManageRecruiter());
    }else{
      this.alerts
      .open('', {label: 'Vui lòng đăng nhập',status:'info'})
      .subscribe();
    }

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
          .open('', {label: 'Đã cấm nhà tuyển dụng thành công',status:'success'})
          .subscribe();
          this.store.dispatch(RecruiterActions.getAllAtManageRecruiter());
          }
        }),
        this.banError$.subscribe(error => {
          if (error.length) {
            this.closeRecruiterDialog();
            this.alerts
            .open('', {label: 'Có lỗi xảy ra',status:'error'})
            .subscribe();
          }
        }),
        this.isUnBanSuccess$.subscribe(isUnBanSuccess => {
          if (isUnBanSuccess) {
            this.closeRecruiterDialog();
            this.alerts
          .open('', {label: 'Đã bỏ cấm nhà tuyển dụng thành công',status:'success'})
          .subscribe();
          this.store.dispatch(RecruiterActions.getAllAtManageRecruiter());
          }
        }),
        this.banTakenByRecruiter$.subscribe(ban => {
          if (ban._id) {
            if(ban._id!='500'){
              this.banToUnBan = ban;
              this.openRecruiterDialog(ban.Recruiter);
            }
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
    this.store.dispatch(BanActions.banUserAtManageRecruiter({ban, token: this.token}));
  }
  unBanRecruiter() {
    const ban: any ={
      _id: this.banToUnBan._id,
      User: this.banToUnBan.Recruiter._id,
      forCandidate: 'false',
      forRecruiter: 'true'
    }
    console.log(ban);
    
    this.store.dispatch(BanActions.unBanUserAtManageRecruiter({ban:ban, token: this.token}));
  }
  checkIsBan(recruiter: Recruiter) {
    if(recruiter.isBan){
      this.store.dispatch(BanActions.getByRecruiterAtManageRecruiter({recruiter: recruiter._id}));
    }else{
      this.openRecruiterDialog(recruiter);
    }
  }

  banOrUnBanRecruiter() {
    if(this.isBan){
      this.unBanRecruiter();
    }else{
      this.banRecruiter();
    }
  }


  @ViewChild('recruiterDialog', { static: true })
  recruiterDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openRecruiterDialog(recruiter: Recruiter) {
    this.recruiterDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
    this.recruiterToBan = recruiter;
    this.isBan = recruiter.isBan;
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
