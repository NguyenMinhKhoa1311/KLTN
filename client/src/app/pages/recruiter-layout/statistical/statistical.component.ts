import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { TuiAxesModule, TuiBarChartModule,TuiLegendItemModule,TuiRingChartModule } from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {tuiSum} from '@taiga-ui/cdk';

import {TuiAlertService} from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BillState } from '../../../ngrx/states/bill.state';
import { Router } from '@angular/router';
import { Recruiter } from '../../../models/recruiter.model';
import { Bill } from '../../../models/bill.model';
import * as BillActions from '../../../ngrx/actions/bill.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-statistical',
  standalone: true,
  imports: [TaigaModule,ShareModule, TuiBarChartModule, TuiAxesModule,TuiLegendItemModule,TuiRingChartModule,TuiMoneyModule],
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
  billsToRender: Bill[] = [];
  total: number = 0;
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
          this.billsToRender = bills;
          this.grandTotals = bills.map(item => item.GrandTotal);
          this.jobs = bills.map(item => item.Job.Name);
          this.total = this.grandTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
        }
      }),
      this.billsTakenByYear$.subscribe((bills) => {
        if(bills.length){
          this.billsToRender = bills;
          this.grandTotals = bills.map(item => item.GrandTotal);
          this.jobs = bills.map(item => item.Job.Name);
          this.total = this.grandTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
        }
      }),
      this.billsTakenByDate$.subscribe((bills) => {
        if(bills.length){
          this.billsToRender = bills;
          this.grandTotals = bills.map(item => item.GrandTotal);
          this.jobs = bills.map(item => item.Job.Name);
          this.total = this.grandTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
        }
      })
  );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }


  readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];
  readonly labelsY = ['0','500.000','1.000.000', '1.500.000', '2.000.000', '2.500.000', '3.000.000', '3.250.000'];

  data = new FormGroup({
    date: new FormControl(null),
    month: new FormControl(null),
    year: new FormControl(null)
  });


  activeItemIndexLegend = NaN;
 
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly labels = ['Food', 'Cafe', 'OSS', 'Taxi', 'Other'];
 
    isItemActive(index: number): boolean {
        return this.activeItemIndex === index;
    }
 
    onHover(index: number, hovered: boolean): void {
        this.activeItemIndex = hovered ? index : 0;
    }
 
    getColor(index: number): string {
        return `var(--tui-chart-${index})`;
    }
    
    thongke(){
      console.log('Date:', this.data.get('date')?.value);
      console.log('Month:', this.data.get('month')?.value);
      console.log('Year:', this.data.get('year')?.value);
    }
}
