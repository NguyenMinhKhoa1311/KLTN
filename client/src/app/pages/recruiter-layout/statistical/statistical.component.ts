import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { TuiAxesModule, TuiBarChartModule,TuiLegendItemModule,TuiRingChartModule } from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiContextWithImplicit, tuiSum} from '@taiga-ui/cdk';

import {TuiAlertService, tuiFormatNumber} from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BillState } from '../../../ngrx/states/bill.state';
import { Router } from '@angular/router';
import { Recruiter } from '../../../models/recruiter.model';
import { Bill } from '../../../models/bill.model';
import * as BillActions from '../../../ngrx/actions/bill.actions';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldState } from '../../../ngrx/states/field.state';
import { Field } from '../../../models/field.model';
import { CareerState } from '../../../ngrx/states/career.state';
import { Career } from '../../../models/career.model';

@Component({
  selector: 'app-statistical',
  standalone: true,
  imports: [TaigaModule,ShareModule, TuiBarChartModule, TuiAxesModule,TuiLegendItemModule,TuiRingChartModule,TuiMoneyModule],
  templateUrl: './statistical.component.html',
  styleUrl: './statistical.component.less'
})
export class StatisticalComponent {
  

  
  subscriptions: Subscription[] =[]

  //variables
  activeItemIndexOfChoose = 2;
  token: string = '';
  userLogged: Recruiter = <Recruiter>{};
  fields: string[] = [];
  careers: string[] = [];
  fieldAll: Field[] = [];
  careerAll: Career[] = [];
  statisticalDataOfField: any[] = [];
  statisticalDataOfCareer: any[] = [];
  grandTotalsOfField:number[] = [];
  grandTotalsOfCareer:number[] = [];
  totalOfField: number = 0;
  totalOfCareer: number = 0;
  billsCurrent: Bill[] = [];
  labelsY: string[]= [];
  percentOfGrandTotals: number[] = [];
  isGetByMonthSuccess: boolean = false;
  isGetByYearSuccess: boolean = false;
  isGetByDateSuccess: boolean = false;
  isGetByMonth: boolean = false;
  isGetByYear: boolean = true;
  isGetByDate: boolean = false;
  isGetByField: boolean = true;
  isGetByCareer: boolean = false;
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  currentDay: number = new Date().getDate();
  isHover: boolean = false;

  //ngrx of bill
  isGetByMonthSuccess$ = this.store.select('bill', 'isGetByMonthAtStatisticalSuccess');
  isGetByYearSuccess$ = this.store.select('bill', 'isGetByYearAtStatisticalSuccess');
  isGetByDateSuccess$ = this.store.select('bill', 'isGetByDateAtStatisticalSuccess');
  billsTakenByMonth$ = this.store.select('bill', 'billsTakenByGetByMonthAtStatistical');
  billsTakenByYear$ = this.store.select('bill', 'billsTakenByGetByYearAtStatistical');
  billsTakenByDate$ = this.store.select('bill', 'billsTakenByGetByDateAtStatistical');

  //ngrx of field
  fieldAll$ = this.store.select('field', 'fieldNoLimitAtStatistical');

  //ngrx of career
  careerAll$ = this.store.select('career', 'careersTakenByGetAllAtStatistical');

  

  constructor(
    private store: Store<{
      bill: BillState,
      field: FieldState,
      career: CareerState
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
    this.store.dispatch(CareerActions.getAllAtStatistical());
    this.store.dispatch(BillActions.getByYearAtStatistical({year: new Date().getFullYear(),recruiter: this.userLogged._id}));
    this.data.get('date')?.valueChanges.subscribe(value => {
      if (value) {
        let {day,month,year} = this.data.get('date')?.value ?? {day:0,month:0,year:0};
      console.log('Date:', day,month,year);
      this.store.dispatch(BillActions.getByDateAtStatistical({date: `${year}-0${month+1}-${day}`,recruiter: this.userLogged._id}));
      }
    }),

    this.data.get('month')?.valueChanges.subscribe(value => {
      if (value) {
          let {month,year} = this.data.get('month')?.value ?? {month:0,year:0};
          console.log('Month:', month,year);
          this.store.dispatch(BillActions.getByMonthAtStatistical({month: month+1, year: year,recruiter: this.userLogged._id}));
      }
    }),

    this.data.get('year')?.valueChanges.subscribe(value => {
      if (value) {
        let year = this.data.get('year')?.value;
      console.log('Year:', year);
      this.store.dispatch(BillActions.getByYearAtStatistical({year: year??2024,recruiter: this.userLogged._id}));
      }
    }),
    this.subscriptions.push(
      this.fieldAll$.subscribe((fields) => {
        if(fields.length){
          this.fieldAll = fields;
        }
      }),
      this.careerAll$.subscribe((careers) => {
        if(careers.length){
          this.careerAll = careers
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
          this.clearDataCareer();
          this.clearDataOfField();
          bills.forEach((bill) => {
            this.billsCurrent = bills;
            //statistical data of field
            let statisticalItemOfField = this.statisticalDataOfField.find((data) => data.FieldId == bill.Job.Field);
            if(statisticalItemOfField){
              statisticalItemOfField.GrandTotal += bill.GrandTotal;
            }
            else{
              let field = this.fieldAll.find(item => item._id == bill.Job.Field.toString());
              this.statisticalDataOfField.push({field: field?.FieldName, GrandTotal: bill.GrandTotal, FieldId: field?._id});
            }
            this.fields = this.statisticalDataOfField.map(item => item.field);
            //statistical data of career
            let statisticalDataOfCareer = this.statisticalDataOfCareer.find((data) => data.CareerId == bill.Job.Career);
            if(statisticalDataOfCareer){
              statisticalDataOfCareer.GrandTotal += bill.GrandTotal;
            }
            else{
              let career = this.careerAll.find(item => item._id == bill.Job.Career.toString());
              this.statisticalDataOfCareer.push({career: career?.Name, GrandTotal: bill.GrandTotal, CareerId: career?._id});
            }
            this.careers = this.statisticalDataOfCareer.map(item => item.career);
          })
          // caculate total of field
          this.grandTotalsOfField = this.statisticalDataOfField.map(item => item.GrandTotal);
          this.totalOfField = this.grandTotalsOfField.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          // caculate total of career
          this.grandTotalsOfCareer = this.statisticalDataOfCareer.map(item => item.GrandTotal);
          this.totalOfCareer = this.grandTotalsOfCareer.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          this.percentOfGrandTotals = this.grandTotalsOfCareer.map(item => Math.round(item/this.totalOfCareer*100));
          this.labelsY = [];
          for(let i = 0; i <= 10; i++){
            this.labelsY.push(`${this.totalOfField/10*i}`);
          }
          console.log('Statistical data of field:', this.statisticalDataOfField);
          console.log('Statistical data of career:', this.statisticalDataOfCareer);
          console.log('Total of field:', this.totalOfField);
          console.log('Total of career:', this.totalOfCareer);
          console.log('Fields:', this.fields);
          console.log('Careers:', this.careers);
          console.log('Grand totals of field:', this.grandTotalsOfField);
          console.log('Grand totals of career:', this.grandTotalsOfCareer);
          console.log('Labels Y:', this.labelsY);
        }else if(this.isGetByMonthSuccess){
          this.clearDataCareer();
          this.clearDataOfField();
          this.alerts
          .open('', {label: 'Không có hóa đơn nào',status:'info'})
          .subscribe();
        }
      }),

      
      this.billsTakenByYear$.subscribe((bills) => {
        if(bills.length){
          this.clearDataCareer();
          this.clearDataOfField();
          bills.forEach((bill) => {
            this.billsCurrent = bills;
            //statistical data of field
            let statisticalItemOfField = this.statisticalDataOfField.find((data) => data.FieldId == bill.Job.Field);
            if(statisticalItemOfField){
              statisticalItemOfField.GrandTotal += bill.GrandTotal;
            }
            else{
              let field = this.fieldAll.find(item => item._id == bill.Job.Field.toString());
              this.statisticalDataOfField.push({field: field?.FieldName, GrandTotal: bill.GrandTotal, FieldId: field?._id});
            }
            this.fields = this.statisticalDataOfField.map(item => item.field);
            //statistical data of career
            let statisticalDataOfCareer = this.statisticalDataOfCareer.find((data) => data.CareerId == bill.Job.Career);
            if(statisticalDataOfCareer){
              statisticalDataOfCareer.GrandTotal += bill.GrandTotal;
            }
            else{
              let career = this.careerAll.find(item => item._id == bill.Job.Career.toString());
              this.statisticalDataOfCareer.push({career: career?.Name, GrandTotal: bill.GrandTotal, CareerId: career?._id});
            }
            this.careers = this.statisticalDataOfCareer.map(item => item.career);
          })
          // caculate total of field
          this.grandTotalsOfField = this.statisticalDataOfField.map(item => item.GrandTotal);
          this.totalOfField = this.grandTotalsOfField.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          // caculate total of career
          this.grandTotalsOfCareer = this.statisticalDataOfCareer.map(item => item.GrandTotal);
          this.totalOfCareer = this.grandTotalsOfCareer.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          this.percentOfGrandTotals = this.grandTotalsOfCareer.map(item => Math.round(item/this.totalOfCareer*100));
          this.labelsY = [];
          for(let i = 0; i <= 10; i++){
            this.labelsY.push(`${this.totalOfField/10*i}`);
          }
          console.log('Statistical data of field:', this.statisticalDataOfField);
          console.log('Statistical data of career:', this.statisticalDataOfCareer);
          console.log('Total of field:', this.totalOfField);
          console.log('Total of career:', this.totalOfCareer);
          console.log('Fields:', this.fields);
          console.log('Careers:', this.careers);
          console.log('Grand totals of field:', this.grandTotalsOfField);
          console.log('Grand totals of career:', this.grandTotalsOfCareer);
          console.log('Labels Y:', this.labelsY);
        }else if(this.isGetByYearSuccess){
          this.clearDataCareer();
          this.clearDataOfField();
          this.alerts
          .open('', {label: 'Không có hóa đơn nào',status:'info'})
          .subscribe();
        }
      }),

      this.billsTakenByDate$.subscribe((bills) => {
        this.clearDataOfField();
        this.clearDataCareer();
        if(bills.length){
          this.billsCurrent = bills;
          bills.forEach((bill) => {
            //statistical data of field
            let statisticalItemOfField = this.statisticalDataOfField.find((data) => data.FieldId == bill.Job.Field);
            if(statisticalItemOfField){
              statisticalItemOfField.GrandTotal += bill.GrandTotal;
            }
            else{
              let field = this.fieldAll.find(item => item._id == bill.Job.Field.toString());
              this.statisticalDataOfField.push({field: field?.FieldName, GrandTotal: bill.GrandTotal, FieldId: field?._id});
            }
            this.fields = this.statisticalDataOfField.map(item => item.field);
            //statistical data of career
            let statisticalDataOfCareer = this.statisticalDataOfCareer.find((data) => data.CareerId == bill.Job.Career);
            if(statisticalDataOfCareer){
              statisticalDataOfCareer.GrandTotal += bill.GrandTotal;
            }
            else{
              let career = this.careerAll.find(item => item._id == bill.Job.Career.toString());
              this.statisticalDataOfCareer.push({career: career?.Name, GrandTotal: bill.GrandTotal, CareerId: career?._id});
            }
            this.careers = this.statisticalDataOfCareer.map(item => item.career);
          })
          // caculate total of field
          this.grandTotalsOfField = this.statisticalDataOfField.map(item => item.GrandTotal);
          this.totalOfField = this.grandTotalsOfField.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          // caculate total of career
          this.grandTotalsOfCareer = this.statisticalDataOfCareer.map(item => item.GrandTotal);
          this.totalOfCareer = this.grandTotalsOfCareer.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          this.percentOfGrandTotals = this.grandTotalsOfCareer.map(item => Math.round(item/this.totalOfCareer*100));
          this.labelsY = [];
          for(let i = 0; i <= 10; i++){
            this.labelsY.push(`${this.totalOfField/10*i}`);
          }
          console.log('Statistical data of field:', this.statisticalDataOfField);
          console.log('Statistical data of career:', this.statisticalDataOfCareer);
          console.log('Total of field:', this.totalOfField);
          console.log('Total of career:', this.totalOfCareer);
          console.log('Fields:', this.fields);
          console.log('Careers:', this.careers);
          console.log('Grand totals of field:', this.grandTotalsOfField);
          console.log('Grand totals of career:', this.grandTotalsOfCareer);
          console.log('Labels Y:', this.labelsY);
        }else if(this.isGetByDateSuccess){
          this.clearDataCareer();
          this.clearDataOfField();
          this.alerts
          .open('', {label: 'Không có hóa đơn nào',status:'info'})
          .subscribe();
        }
      })
  );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  
  statisticalByField(_id: string){
    this.clearDataCareer();
    let billGetByField = this.billsCurrent.filter(bill => bill.Job.Field.toString() == _id );
    console.log('Bill get by field:', billGetByField);
    billGetByField.forEach(bill => {
      //statistical data of career
      let statisticalDataOfCareer = this.statisticalDataOfCareer.find((data) => data.CareerId == bill.Job.Career);
      if(statisticalDataOfCareer){
        statisticalDataOfCareer.GrandTotal += bill.GrandTotal;
      }
      else{
        let career = this.careerAll.find(item => item._id == bill.Job.Career.toString());
        this.statisticalDataOfCareer.push({career: career?.Name, GrandTotal: bill.GrandTotal, CareerId: career?._id});
      }
      this.careers = this.statisticalDataOfCareer.map(item => item.career);
    });
      // caculate total of career
      this.grandTotalsOfCareer = this.statisticalDataOfCareer.map(item => item.GrandTotal);
      this.totalOfCareer = this.grandTotalsOfCareer.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      this.percentOfGrandTotals = this.grandTotalsOfCareer.map(item => Math.round(item/this.totalOfCareer*100));

    
  }

  statisticalCurrent(){
    this.billsCurrent.forEach(bill => {
      //statistical data of career
      let statisticalDataOfCareer = this.statisticalDataOfCareer.find((data) => data.CareerId == bill.Job.Career);
      if(statisticalDataOfCareer){
        statisticalDataOfCareer.GrandTotal += bill.GrandTotal;
      }
      else{
        let career = this.careerAll.find(item => item._id == bill.Job.Career.toString());
        this.statisticalDataOfCareer.push({career: career?.Name, GrandTotal: bill.GrandTotal, CareerId: career?._id});
      }
      this.careers = this.statisticalDataOfCareer.map(item => item.career);
    });
      // caculate total of career
      this.grandTotalsOfCareer = this.statisticalDataOfCareer.map(item => item.GrandTotal);
      this.totalOfCareer = this.grandTotalsOfCareer.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      this.percentOfGrandTotals = this.grandTotalsOfCareer.map(item => Math.round(item/this.totalOfCareer*100));
  }

  clearDataCareer(){
    this.statisticalDataOfCareer = [];
    this.careers = [];
    this.grandTotalsOfCareer = [];
    this.totalOfCareer = 0;

  }
  clearDataOfField(){
    this.statisticalDataOfField = [];
    this.fields = [];
    this.grandTotalsOfField = [];
    this.totalOfField = 0;
  }


  data = new FormGroup({
    date: new FormControl(null),
    month: new FormControl(null),
    year: new FormControl(this.currentYear)
  });
  changeModeOfTime(isDay:boolean,isMonth:boolean,isYear:boolean){
      this.clearDataCareer();
      this.clearDataOfField();
      this.isGetByMonth = isMonth;
      this.isGetByYear = isYear
      this.isGetByDate = isDay;
      if(isYear){
        this.store.dispatch(BillActions.getByYearAtStatistical({year: new Date().getFullYear(),recruiter: this.userLogged._id}));
      }
  }

  appearance = 'onDark';

  readonly hint = ({ $implicit }: TuiContextWithImplicit<number>): string => {
    this.isHover = true;
    console.log({ $implicit });
    this.statisticalByField(this.statisticalDataOfField[$implicit].FieldId);
    return this.statisticalDataOfField[$implicit].GrandTotal.toString();
  };
  onHoverOut(): void {
    if(this.isHover){
      this.clearDataCareer();
      this.statisticalCurrent();
      this.isHover = false;
    }
  }
  

  get sum(): number {
      return Number.isNaN(this.activeItemIndex) ? this.totalOfCareer : this.grandTotalsOfCareer[this.activeItemIndex];
  }

  get label(): string {
      return Number.isNaN(this.activeItemIndex) ? 'Total' : this.careers[this.activeItemIndex];
  }


  activeItemIndex = NaN;
  isItemActive(index: number): boolean {
    return this.activeItemIndex === index;
}

onHover(index: number, hovered: boolean): void {
    console.log('index:', index);
    
    this.activeItemIndex = hovered ? index : 0;
}

getColor(index: number): string {
    return `var(--tui-chart-${index})`;
}

    

}
