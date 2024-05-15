import { Component, Inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {TuiBarChartModule} from '@taiga-ui/addon-charts';
import {tuiCeil} from '@taiga-ui/cdk';
import {TuiAxesModule} from '@taiga-ui/addon-charts';
import {TuiAlertService} from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BillState } from '../../../ngrx/states/bill.state';
import { Router } from '@angular/router';
import { Recruiter } from '../../../models/recruiter.model';
import { Bill } from '../../../models/bill.model';
import * as BillActions from '../../../ngrx/actions/bill.actions';

@Component({
  selector: 'app-statistical',
  standalone: true,
  imports: [TaigaModule, ShareModule,TuiBarChartModule,TuiAxesModule],
  templateUrl: './statistical.component.html',
  styleUrl: './statistical.component.less'
})
export class StatisticalComponent {
  activeItemIndex = 0;
  subscriptions: Subscription[] =[]

  //variables
  token: string = '';
  userLogged: Recruiter = <Recruiter>{};
  grandTotals:number[] = [];
  jobs: string[] = [];
  isGetByMonthSuccess: boolean = false;
  isGetByYearSuccess: boolean = false;
  isGetByDateSuccess: boolean = false;

  //ngrx of bill
  isGetByMonthSuccess$ = this.store.select('bill', 'isGetByMonthAtStatisticalSuccess');
  isGetByYearSuccess$ = this.store.select('bill', 'isGetByYearAtStatisticalSuccess');
  isGetByDateSuccess$ = this.store.select('bill', 'isGetByDateAtStatisticalSuccess');
  billsTakenByMonth$ = this.store.select('bill', 'billsTakenByGetByMonthAtStatistical');
  billsTakenByYear$ = this.store.select('bill', 'billsTakenByGetByYearAtStatistical');
  billsTakenByDate$ = this.store.select('bill', 'billsTakenByGetByDateAtStatistical');

  
  constructor(
    private store: Store<{
      bill: BillState;
    }>,
    private readonly alerts: TuiAlertService,
    private router: Router
  ) {
    let token = sessionStorage.getItem('tokenOfRecruiter');
    let userLogged = sessionStorage.getItem('recruiterLoged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Recruiter;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.userLogged = userAfterParse;
      }}
    if(token){
      this.token = token;
    }
    this.store.dispatch(BillActions.getByYearAtStatistical({year: new Date().getFullYear(),recruiter: this.userLogged._id}));
    this.subscriptions.push(
      this.isGetByMonthSuccess$.subscribe((isGetByMonthSuccess) => {
        this.isGetByMonthSuccess = isGetByMonthSuccess;
      }),
      this.isGetByYearSuccess$.subscribe((isGetByYearSuccess) => {
        this.isGetByYearSuccess = isGetByYearSuccess;
      }),
      this.isGetByDateSuccess$.subscribe((isGetByDateSuccess) => {
        this.isGetByDateSuccess = isGetByDateSuccess;
      }),
      this.billsTakenByMonth$.subscribe((bills) => {
        if(bills.length){
          this.grandTotals = bills.map(item => item.GrandTotal);
          this.jobs = bills.map(item => item.Job.Name);
        }
      }),
      this.billsTakenByYear$.subscribe((bills) => {
        if(bills.length){
          this.grandTotals = bills.map(item => item.GrandTotal);
          this.jobs = bills.map(item => item.Job.Name);
        }
      }),
      this.billsTakenByDate$.subscribe((bills) => {
        if(bills.length){
          this.grandTotals = bills.map(item => item.GrandTotal);
          this.jobs = bills.map(item => item.Job.Name);
        }
      })
  );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

    

  readonly value = [
    [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
    [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
  ];

  readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];
  readonly labelsY = ['0','500.000','1.000.000', '1.500.000', '2.000.000', '2.500.000', '3.000.000', '3.250.000'];

  getHeight(max: number): number {
      return (max / tuiCeil(max, -3)) * 100;
  }

}
