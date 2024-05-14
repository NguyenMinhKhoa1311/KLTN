
import { TaigaModule } from '../../../shared/taiga.module';

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

  //ngrx for company
  companiesTakenByGetAllAndSortAtCompany$ = this.store.select('company', 'companysTakenByGetAllAndSortAtCompany');
  companiesTakenByGetByNameWithKeyword$ = this.store.select('company', 'companysTakenByGetByNameWithKeywordAtCompany');

  keywordForm = new FormGroup({
    keyword: new FormControl('', [Validators.required]),
  })

  constructor(
    private store : Store<{ company: CompanyState}>,
    private router: Router
  ){
    this.store.dispatch(CompanyActions.getAllAndSortAtCompany({page: 0, limit: 5, sortBy: "createdAt", sortOrder: "desc"}));
    this.subscriptions.push(
      this.companiesTakenByGetAllAndSortAtCompany$.subscribe(companies => {
      if(companies.length){
        this.compamiesToRender = companies;
      }
    }),
    this.companiesTakenByGetByNameWithKeyword$.subscribe(companies => {
      if(companies.length){
        this.compamiesToRender = companies;
      }
    })
  );
  }
  search(){
    this.store.dispatch(CompanyActions.getByNameWithKeywordAtCompany({keyword: this.keywordForm.value.keyword??"", page: 0, limit: 5, sortBy: "createdAt", sortOrder: "desc"}));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  index_item = 0;
}
