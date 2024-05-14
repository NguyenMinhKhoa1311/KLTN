import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { RecruitmentState } from '../../../ngrx/states/recruitment.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as RecruitmentActions from '../../../ngrx/actions/recruitment.actions';
import { Recruitment } from '../../../models/recruitment.model';

import { convertDayMonthYearYYYMMDD, convertToDate, getDatetimeFromIso, parseDate } from '../../../../environments/environments';
import { MailState } from '../../../ngrx/states/mail.state';
import * as MailActions from '../../../ngrx/actions/mail.actions';
import { candidateState } from '../../../ngrx/states/candidate.state';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { Candidate } from '../../../models/candidate.model';
import { Mail } from '../../../models/mail.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.less'
})
export class ApplicationListComponent implements OnDestroy {


  subscriptions: Subscription[] = [];

  //variables
  page: number = 0;
  recruitments: Recruitment[] = [];
  isGetRecruitment: boolean = false;
  candidateToRender: Candidate = <Candidate>{};
  isGetCandidate: boolean = false;
  recruitmentToAcept:Recruitment = <Recruitment>{};
  dateInterview: string = "";
  isUpdatedDateInterView: boolean = false;
  
  //ngrx of recruitment
  recruitmentsTakenByRecruiter$ = this.store.select('recruitment', 'recruitmentsTakenByRecruiter');
  recruitmentUpdatedInterviewDate$ = this.store.select('recruitment', 'recruitmentUpdatedDateInterview');

  //ngrx of candidate
  candidateTakenById$ = this.store.select('candidate', 'candidateTakenByIdAtAplicationList');

  //ngrx of mail
  isSenMailSuccess$ = this.store.select('mail', 'isSendMailAtAplicationListSuccess');


  parseDateInComponent(date: Date) {
    return parseDate(date);
  }

  
  constructor(
    private store: Store<{
      recruitment: RecruitmentState;
      mail: MailState;
      candidate: candidateState;

    }>,
    private router: Router
  ) {
    this.store.dispatch(RecruitmentActions.getByRecruiterAtAplicationList({recruiter: '65fa893d3dcc1153af38b1a5', page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc'}))
    
    this.subscriptions.push(
      this.recruitmentsTakenByRecruiter$.subscribe((recruitments) => {
        console.log(recruitments);
        this.recruitments = recruitments;
      }),
      this.candidateTakenById$.subscribe((candidate) => {
        if(this.isGetCandidate){
          this.candidateToRender = candidate;
        }

      }),
      this.isSenMailSuccess$.subscribe((isSuccess) => {
        if(isSuccess){
          // this.closeEmailDialog();
          if(!this.isUpdatedDateInterView){
            this.isUpdatedDateInterView = true;
          }
          this.store.dispatch(RecruitmentActions.updateDateInterviewAtAplicationList({id: this.recruitmentToAcept._id, date: this.dateInterview}))
        }
      }),
      this.recruitmentUpdatedInterviewDate$.subscribe((newRecruitment) => {
        console.log(newRecruitment);
        if(this.isUpdatedDateInterView){
          if(newRecruitment._id != "500" ){
            console.log(newRecruitment);
            
            alert('Đã thông báo cho ứng viên');
            this.store.dispatch(RecruitmentActions.getByRecruiterAtAplicationList({recruiter: '65fa893d3dcc1153af38b1a5', page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc'}))
            this.closeEmailDialog();
          }
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  aceptCandidate(){
    console.log(this.recruitmentToAcept);
    const date = convertDayMonthYearYYYMMDD(this.emailForm.value.date_interview??"")
    
    const mail: Mail = {
      from: "Tuyển dụng",
      to:this.candidateToRender.Email,
      subject: "Thông báo kết quả ứng tuyển",
      text: ``,
      html:`    <h1>Chúc mừng bạn đã trúng tuyển!</h1>
      <p>Kính gửi ông/bà ${this.recruitmentToAcept.Candidate.Name},</p>
      <p>Chúng tôi rất vui mừng thông báo rằng bạn đã được chọn vào vòng phỏng vấn của  vị trí ${this.recruitmentToAcept.Job.Name} tại công ty ${this.recruitmentToAcept.Company.Name}. Chúng tôi đánh giá cao sự quan tâm của bạn dành cho công ty và ấn tượng với kinh nghiệm và kỹ năng của bạn trong buổi phỏng vấn.</p>
      <p>Thời gian phỏng vấn sẽ vào ${ this.emailForm.value.time_interview??""} ngày ${date.day} tháng ${date.month} năm ${date.year} tại ${this.recruitmentToAcept.Company.Address}</p>
      <p>Một lần nữa, xin chúc mừng bạn đã có ý định gia nhập **${this.recruitmentToAcept.Company.Name}**. Chúng tôi mong muốn được hợp tác và cùng bạn phát triển trong tương lai.</p>
      <br>
      Trân trọng,<br>
      Bộ phận Tuyển dụng<br>
      ${this.recruitmentToAcept.Recruiter.Name}`
      
    }

    const dateTime = convertToDate(this.emailForm.value.date_interview??"", this.emailForm.value.time_interview??"");
    this.dateInterview = dateTime.toISOString();
    
    
    
    this.store.dispatch(MailActions.sendMailAtAplicationList({mail:mail}))
  }

  emailForm = new FormGroup({
    date_interview: new FormControl('', [Validators.required]),
    time_interview: new FormControl('', [Validators.required])
  });


  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);

  //open detail dialog
  openDetailDialog(candidate:Candidate, recruitment:Recruitment) {
    if(!this.isGetCandidate){
      this.isGetCandidate = true;
    }
    //set recruitment to acept
    this.recruitmentToAcept = recruitment;
    this.store.dispatch(CandidateActions.getByIdAtAplicationList({id: candidate._id}))
    //update status seen
    this.store.dispatch(RecruitmentActions.updateStatusSeenAtAplicationList({recruitment: recruitment._id,status: true}))
    this.detailDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  // close detail dialog
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }


  @ViewChild('emailDialog', { static: true })
  emailDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);

  //open email dialog
  openEmailDialog() {
    this.emailDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  //close email dialog
  closeEmailDialog() {
    this.emailDialog.nativeElement.close();
    this.cdr2.detectChanges();
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  index_item = 0;
}
