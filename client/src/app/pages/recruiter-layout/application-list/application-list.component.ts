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

  //ngrx of recruitment
  recruitmentsTakenByRecruiter$ = this.store.select('recruitment', 'recruitmentsTakenByRecruiter');


  parseDateInComponent(date: Date) {
    return parseDate(date);
  }

  
  constructor(
    private store: Store<{
      recruitment: RecruitmentState;
    }>,
    private router: Router
  ) {
    this.store.dispatch(RecruitmentActions.getByRecruiterAtAplicationList({recruiter: '65fa893d3dcc1153af38b1a5', page: this.page, limit: 10, sortBy: 'createdAt', sortOrder: 'desc'}))
    
    this.subscriptions.push(
      this.recruitmentsTakenByRecruiter$.subscribe((recruitments) => {
        console.log(recruitments);
        this.recruitments = recruitments;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openDetailDialog() {
    this.detailDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }
}
