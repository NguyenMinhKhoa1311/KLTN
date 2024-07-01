import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { Store } from '@ngrx/store';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import * as BanActions from '../../../ngrx/actions/ban.actions';
import { BanState } from '../../../ngrx/states/ban.state';
import { Subscription } from 'rxjs';
import { Candidate } from '../../../models/candidate.model';
import { generateUuid, parseDate } from '../../../../environments/environments';
import { TuiAlertService } from '@taiga-ui/core';
import { Ban } from '../../../models/ban.model';

@Component({
  selector: 'app-candidate-management',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './candidate-management.component.html',
  styleUrl: './candidate-management.component.less'
})
export class CandidateManagementComponent implements OnDestroy{

  //variables
  candidatesToRender: Candidate[] = [];
  candidateToRender: Candidate = <Candidate>{};
  candidateToBan: Candidate = <Candidate>{};
  banToUnBan: Ban = <Ban>{};
  isBan: boolean = false;

  
  subscriptions: Subscription[] = [];


  //ngrx of candidate
  candidates$ = this.store.select('candidate', 'candidateTakenAllAtManageCandidate');

  //ngrx of ban
  isBanSuccess$ = this.store.select('ban', 'isBanUserAtManageCandidateSuccess');
  banError$ = this.store.select('ban', 'banUserAtManageCandidateError');
  banTakenByCandidate$ = this.store.select('ban', 'banTakenByCandidateAtManagementCandidate');
  isUnBanSuccess$ = this.store.select('ban', 'isUnBanUserAtManageCandidateSuccess');

  parseDateInComponent(date: Date) {
    return parseDate(date);
  }

  constructor(
    private readonly store: Store<{ 
      candidate: candidateState,
      ban: BanState 
    }>,
    private readonly alerts: TuiAlertService,
  ) {
    this.subscriptions.push(
        this.candidates$.subscribe(candidates => {
          if (candidates.length) {
            this.candidatesToRender = candidates;
          }
        }),
        this.isBanSuccess$.subscribe(isBanSuccess => {
          if (isBanSuccess) {
            this.closeCandidateDialog();
            this.alerts
          .open('', {label: 'Đã cấm thành công ứng viên',status:'success'})
          .subscribe();
          this.store.dispatch(CandidateActions.getAllAtManageCandidate());
          }
        }),
        this.banError$.subscribe(error => {
          if (error.length) {
            this.alerts
          .open('', {label: 'Có lỗi xảy ra',status:'error'})
          .subscribe();
          }
        }),
        this.banTakenByCandidate$.subscribe(ban => {
          if (ban._id) {
            if(ban._id!='500'){
              this.banToUnBan = ban;
              this.openCandidateDialog(ban.Candidate);
            }
          }
        }),
        this.isUnBanSuccess$.subscribe(isUnBanSuccess => {
          if (isUnBanSuccess) {
            this.closeCandidateDialog();
            this.alerts
          .open('', {label: 'Đã hủy cấm thành công ứng viên',status:'success'})
          .subscribe();
          this.store.dispatch(CandidateActions.getAllAtManageCandidate());
          }
        })
    );
    this.store.dispatch(CandidateActions.getAllAtManageCandidate());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  banCandidate() {
    const ban:any = {
      BanId:generateUuid(),
      Reason: 'Reason',
      Candidate: this.candidateToBan._id,
      Date: new Date()
    }
    console.log(ban);
    
    this.store.dispatch(BanActions.banUserAtManageCandidate({ban:ban}));
  }
  unbanCandidate() {
    const unBan: any ={
      _id: this.banToUnBan._id,
      User: this.banToUnBan.Candidate._id,
      forCandidate: 'true',
      forRecruiter: 'false'
    }
    this.store.dispatch(BanActions.unBanUserAtManageCandidate({ban: unBan}));
  }
  checkIsBan(candidate: Candidate) {
    console.log(candidate.isBan);
    
    if (candidate.isBan) {
      console.log(candidate._id);
      
      this.store.dispatch(BanActions.getByCandidateAtManageCandidate({candidate: candidate._id}));
    } else {
      console.log(candidate);
      
      this.openCandidateDialog(candidate);
    }
  }
  banOrUnbanCandidate() {
    if (this.isBan) {
      this.unbanCandidate();
    } else {
      this.banCandidate();
    }
  }

  @ViewChild('candidateDialog', { static: true })
  candidateDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openCandidateDialog(candidate:Candidate) {
    this.candidateToBan = candidate;
    this.isBan = candidate.isBan;
    this.candidateDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeCandidateDialog() {
    this.candidateDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);

  //open detail dialog
  openDetailDialog(candidate:Candidate) {
    this.candidateToRender = candidate;
    this.detailDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
  }
  // close detail dialog
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr2.detectChanges();
  }
}
