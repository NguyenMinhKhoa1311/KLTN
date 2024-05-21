
import { TaigaModule } from '../../../shared/taiga.module';
import {TuiAlertService} from '@taiga-ui/core';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CompanyState } from '../../../ngrx/states/company.state';
import * as CompanyActions from '../../../ngrx/actions/company.actions';
import { Subscription } from 'rxjs';
import { Company } from '../../../models/company.model';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.less'
})
export class CompanyComponent implements OnDestroy{

  subscriptions: Subscription[] = [];

  //variables
  compamiesToRender: Company[] = [];
  isGetByNameWithKeyword: boolean = false;
  page = 0;
  isGetAllAndSortSuccess: boolean = true;
  isGetByNameWithKeywordSuccess: boolean = true;


  //ngrx for company
  isGetAllAndSortAtCompanySuccess$ = this.store.select('company', 'isGetAllAndSortAtCompanySuccess');
  companiesTakenByGetAllAndSortAtCompany$ = this.store.select('company', 'companysTakenByGetAllAndSortAtCompany');
  isGetByNameWithKeywordAtCompanySuccess$ = this.store.select('company', 'isGetByNameWithKeywordAtCompanySuccess');
  companiesTakenByGetByNameWithKeyword$ = this.store.select('company', 'companysTakenByGetByNameWithKeywordAtCompany');

  keywordForm = new FormGroup({
    keyword: new FormControl('', [Validators.required]),
  })

  constructor(
    private store : Store<{ company: CompanyState}>,
    private router: Router,
    private readonly alerts: TuiAlertService
  ){
    this.store.dispatch(CompanyActions.getAllAndSortAtCompany({page: 0, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    this.subscriptions.push(
      this.isGetAllAndSortAtCompanySuccess$.subscribe(isSuccess => {
        this.isGetAllAndSortSuccess = isSuccess;
      }),
      this.companiesTakenByGetAllAndSortAtCompany$.subscribe(companies => {
        if(companies.length){
          this.compamiesToRender = companies;
          }else if(this.isGetAllAndSortSuccess){
            console.log("this.page", this.page);
            
            this.page--;
            this.alerts
            .open('', {label: 'Không có công ty nào !!!',status:'warning'})
            .subscribe();
          }
      }),
      this.isGetByNameWithKeywordAtCompanySuccess$.subscribe(isSuccess => {
        this.isGetByNameWithKeywordSuccess = isSuccess;
      }),
      this.companiesTakenByGetByNameWithKeyword$.subscribe(companies => {
        if(companies.length){
            this.compamiesToRender = companies;
          }else if(this.isGetByNameWithKeywordSuccess){
            console.log("this.page", this.page);
            
            this.page--;
            this.alerts
            .open('', {label: 'Không có công ty nào !!!',status:'warning'})
            .subscribe();
        }
    })
  );
  }
  search(){
    this.isGetByNameWithKeyword = true;
    if(this.keywordForm.value.keyword){
      this.isGetByNameWithKeyword = true;
      this.store.dispatch(CompanyActions.getByNameWithKeywordAtCompany({keyword: this.keywordForm.value.keyword, page: 0, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.isGetByNameWithKeyword = false;
      this.store.dispatch(CompanyActions.getAllAndSortAtCompany({page: 0, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }
  nextPage(){
    this.page++;
    if(this.isGetByNameWithKeyword){
      this.store.dispatch(CompanyActions.getByNameWithKeywordAtCompany({keyword: this.keywordForm.value.keyword??"", page: this.page, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.store.dispatch(CompanyActions.getAllAndSortAtCompany({page: this.page, limit:6, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }
  previousPage(){
    this.page--;
    if(this.isGetByNameWithKeyword){
      this.store.dispatch(CompanyActions.getByNameWithKeywordAtCompany({keyword: this.keywordForm.value.keyword??"", page: this.page, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.store.dispatch(CompanyActions.getAllAndSortAtCompany({page: this.page, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }
  prevPage(){
    if(this.page>0){
      this.page--;
    if(this.isGetByNameWithKeyword){
      this.store.dispatch(CompanyActions.getByNameWithKeywordAtCompany({keyword: this.keywordForm.value.keyword??"", page: this.page, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      console.log("this.page", this.page);
      
      this.store.dispatch(CompanyActions.getAllAndSortAtCompany({page: this.page, limit: 6, sortBy: "createdAt", sortOrder: "desc"}));
    }
    }
  }

  navigateToCompanyDetail(companyId: string) {
    this.router.navigate(['/company-detail',{
      companyId: companyId
    }]);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  index_item = 0;
}
