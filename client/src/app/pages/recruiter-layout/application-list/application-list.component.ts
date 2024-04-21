import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { RecruitmentState } from '../../../ngrx/states/recruitment.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as RecruitmentActions from '../../../ngrx/actions/recruitment.actions';
import { Recruitment } from '../../../models/recruitment.model';

import { parseDate } from '../../../../environments/environments';
import { MailState } from '../../../ngrx/states/mail.state';
import * as MailActions from '../../../ngrx/actions/mail.actions';
import { candidateState } from '../../../ngrx/states/candidate.state';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { Candidate } from '../../../models/candidate.model';
import { Mail } from '../../../models/mail.model';

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

  //ngrx of recruitment
  recruitmentsTakenByRecruiter$ = this.store.select('recruitment', 'recruitmentsTakenByRecruiter');

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
          alert('Gửi mail thành công');
          this.closeEmailDialog();
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
    
    const mail: Mail = {
      from: "Tuyển dụng",
      to:this.candidateToRender.Email,
      subject: "Thông báo kết quả ứng tuyển",
      text: ``,
      html:`    <h1>Chúc mừng bạn đã trúng tuyển!</h1>
      <p>Kính gửi ông/bà ${this.recruitmentToAcept.Candidate.Name},</p>
  
      <p>Chúng tôi rất vui mừng thông báo rằng bạn đã được chọn vào vòng phỏng vấn của  vị trí ${this.recruitmentToAcept.Job.Name} tại công ty ${this.recruitmentToAcept.Company.Name}. Chúng tôi đánh giá cao sự quan tâm của bạn dành cho công ty và ấn tượng với kinh nghiệm và kỹ năng của bạn trong buổi phỏng vấn.</p>
  
      <p>Thông tin chi tiết về vị trí tuyển dụng và ngày bắt đầu làm việc sẽ được thông báo đến bạn trong email tiếp theo.</p>
  
      <p>Một lần nữa, xin chúc mừng bạn đã có ý định gia nhập **${this.recruitmentToAcept.Company.Name}**. Chúng tôi mong muốn được hợp tác và cùng bạn phát triển trong tương lai.</p>
  
      <br>
  
      Trân trọng,<br>
  
      Bộ phận Tuyển dụng<br>
      ${this.recruitmentToAcept.Recruiter.Name}`
      

    }
    this.store.dispatch(MailActions.sendMailAtAplicationList({mail:mail}))
  }


  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openDetailDialog(candidate:Candidate, recruitment:Recruitment) {
    if(!this.isGetCandidate){
      this.isGetCandidate = true;
    }
        //set recruitment to acept
        this.recruitmentToAcept = recruitment;
    this.store.dispatch(CandidateActions.getByIdAtAplicationList({id: candidate._id}))
    this.detailDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }
  @ViewChild('emailDialog', { static: true })
  emailDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);
  openEmailDialog() {
    this.emailDialog.nativeElement.showModal();
    this.cdr2.detectChanges();

    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }
  closeEmailDialog() {
    this.emailDialog.nativeElement.close();
    this.cdr2.detectChanges();
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }
}
