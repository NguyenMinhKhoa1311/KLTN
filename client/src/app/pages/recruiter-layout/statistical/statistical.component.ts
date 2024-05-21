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
import * as FieldActions from '../../../ngrx/actions/field.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldState } from '../../../ngrx/states/field.state';
import { Field } from '../../../models/field.model';

@Component({
  selector: 'app-statistical',
  standalone: true,
  imports: [TaigaModule,ShareModule, TuiBarChartModule, TuiAxesModule,TuiLegendItemModule,TuiRingChartModule,TuiMoneyModule],
  templateUrl: './statistical.component.html',
  styleUrl: './statistical.component.less'
})
export class StatisticalComponent {
  activeItemIndex = 2;
  subscriptions: Subscription[] =[]

  //variables
  token: string = '';
  userLogged: Recruiter = <Recruiter>{};
  grandTotals:number[] = [];
  fields: string[] = [];
  jobs: string[] = [];
  statisticalData: any[] = [];
  billsToRender: Bill[] = [];
  fieldAll: Field[] = [];
  totalOfLegend: number = 0;
  totalOfBar: number = 0;
  isGetByMonthSuccess: boolean = false;
  isGetByYearSuccess: boolean = false;
  isGetByDateSuccess: boolean = false;
  isGetByMonth: boolean = false;
  isGetByYear: boolean = true;
  isGetByDate: boolean = false;
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  currentDay: number = new Date().getDate();

  //ngrx of bill
  isGetByMonthSuccess$ = this.store.select('bill', 'isGetByMonthAtStatisticalSuccess');
  isGetByYearSuccess$ = this.store.select('bill', 'isGetByYearAtStatisticalSuccess');
  isGetByDateSuccess$ = this.store.select('bill', 'isGetByDateAtStatisticalSuccess');
  billsTakenByMonth$ = this.store.select('bill', 'billsTakenByGetByMonthAtStatistical');
  billsTakenByYear$ = this.store.select('bill', 'billsTakenByGetByYearAtStatistical');
  billsTakenByDate$ = this.store.select('bill', 'billsTakenByGetByDateAtStatistical');

  //ngrx of field
  fieldAll$ = this.store.select('field', 'fieldNoLimitAtStatistical');

  
  

  constructor(
    private store: Store<{
      bill: BillState,
      field: FieldState
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
    this.store.dispatch(FieldActions.getAllNoLimitAtStatistical());
    this.store.dispatch(BillActions.getByYearAtStatistical({year: new Date().getFullYear(),recruiter: this.userLogged._id}));
    this.subscriptions.push(
      this.fieldAll$.subscribe((fields) => {
        if(fields.length){
          this.fieldAll = fields;
        }
      }),
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
          bills.forEach((bill) => {
            let statisticalItem = this.statisticalData.find(item => item._id == bill.Job.Field);
            if(statisticalItem){
              statisticalItem.GrandTotal += bill.GrandTotal;
            }else{
              let fieldOfBill = this.fieldAll.find(item => item._id == bill.Job.Field.toString());
              this.statisticalData.push({FieldName: fieldOfBill?.FieldName, GrandTotal: bill.GrandTotal, _id: bill.Job.Field});
            }
          });
          this.grandTotals = this.statisticalData.map(item => item.GrandTotal);
          this.fields = this.statisticalData.map(item => item.FieldName);
          this.totalOfLegend = this.grandTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          this.totalOfBar= this.totalOfLegend;
          for(let i = 0; i <= 10; i++){
            this.labelsY.push(`${this.totalOfBar/10*i}`);
          }
        }
      }),
      this.billsTakenByYear$.subscribe((bills) => {
        if(bills.length){
          this.billsToRender = bills;
          bills.forEach((bill) => {
            let statisticalItem = this.statisticalData.find(item => item._id == bill.Job.Field);
            if(statisticalItem){
              statisticalItem.GrandTotal += bill.GrandTotal;
            }else{
              let fieldOfBill = this.fieldAll.find(item => item._id == bill.Job.Field.toString());
              this.statisticalData.push({FieldName: fieldOfBill?.FieldName, GrandTotal: bill.GrandTotal, _id: bill.Job.Field});
            }
          });
          this.grandTotals = this.statisticalData.map(item => item.GrandTotal);
          this.fields = this.statisticalData.map(item => item.FieldName);
          this.totalOfLegend = this.grandTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          this.totalOfBar= this.totalOfLegend;
          for(let i = 0; i <= 10; i++){
            this.labelsY.push(`${this.totalOfBar/10*i}`);
          }
        }
      }),
      this.billsTakenByDate$.subscribe((bills) => {
        if(bills.length){
          this.billsToRender = bills;
          bills.forEach((bill) => {
            let statisticalItem = this.statisticalData.find(item => item._id == bill.Job.Field);
            if(statisticalItem){
              statisticalItem.GrandTotal += bill.GrandTotal;
            }else{
              let fieldOfBill = this.fieldAll.find(item => item._id == bill.Job.Field.toString());
              this.statisticalData.push({FieldName: fieldOfBill?.FieldName, GrandTotal: bill.GrandTotal, _id: bill.Job.Field});
            }
          });
          this.grandTotals = this.statisticalData.map(item => item.GrandTotal);
          this.fields = this.statisticalData.map(item => item.FieldName);
          this.totalOfLegend = this.grandTotals.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          this.totalOfBar= this.totalOfLegend;
          for(let i = 0; i <= 10; i++){
            this.labelsY.push(`${this.totalOfBar/10*i}`);
          }
        }
      })
  );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }



  labelsY: string[]= [];

  data = new FormGroup({
    date: new FormControl(null),
    month: new FormControl(null),
    year: new FormControl(this.currentYear)
  });
  changeMode(isDay:boolean,isMonth:boolean,isYear:boolean){
      this.isGetByMonth = isMonth;
      this.isGetByYear = isYear
      this.isGetByDate = isDay;
      this.fields = [];
      this.grandTotals = [];
      this.statisticalData = [];
      this.totalOfLegend = 0;
      this.totalOfBar = 0;
      this.labelsY = [];
      

  }

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
    
    statistical(){
      console.log('Date:', this.data.get('date')?.value);
      console.log('Month:', this.data.get('month')?.value);
      console.log('Year:', this.data.get('year')?.value);
      if(this.isGetByDate){
        let {day,month,year} = this.data.get('date')?.value ?? {day:0,month:0,year:0};
        console.log('Date:', day,month,year);
        this.store.dispatch(BillActions.getByDateAtStatistical({date: `${year}-0${month+1}-${day}`,recruiter: this.userLogged._id}));
      }
      if(this.isGetByMonth){
        let {month,year} = this.data.get('month')?.value ?? {month:0,year:0};
        console.log('Month:', month,year);
        this.store.dispatch(BillActions.getByMonthAtStatistical({month: month, year: year,recruiter: this.userLogged._id}));
      }
      if(this.isGetByYear){
        let year = this.data.get('year')?.value;
        console.log('Year:', year);
        this.store.dispatch(BillActions.getByYearAtStatistical({year: year??2024,recruiter: this.userLogged._id}));
      }

      
      
    }
}
