import { Component, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FieldState } from '../../../ngrx/states/field.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import { Field } from '../../../models/field.model';
import { generateUuid } from '../../../../environments/environments';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.less'
})
export class CreateCompanyComponent implements OnDestroy{
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  subscriptions: Subscription[] = [];
  fields: Field[] = [];

  //ngrx of field
  fields$ = this.store.select('field', 'fieldNoLimitAtCreateCompany');

  createCompanyForm = new FormGroup({
    CompanyName: new FormControl('', [Validators.required]),
    CompanyAddress: new FormControl('', [Validators.required]),
    CompanyField: new FormControl('', [Validators.required]),
    CompanyPhone: new FormControl('', [Validators.required]),
    CompanyEmail: new FormControl('', [Validators.required]),
    CompanyDescription: new FormControl('', [Validators.required]),
  });
  constructor(
    private store: Store<{ field: FieldState}>,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) {
    this.store.dispatch(FieldActions.getAllNoLimitAtCreateCompany());
    this.subscriptions.push(
      this.fields$.subscribe((fields) => {
        if(fields.length){
          this.fields = fields;
        }
      })
    );
  }
  confirmCompany(){
    let fieldId = '';
    this.fields.forEach((field) => {
      if(field.FieldName === this.createCompanyForm.value.CompanyField){
        fieldId = field._id;
      }
    });
    const companyData = {
      CompanyId: generateUuid(),
      Name: this.createCompanyForm.value.CompanyName,
      Address: this.createCompanyForm.value.CompanyAddress,
      Field: fieldId,
      Phone: this.createCompanyForm.value.CompanyPhone,
      Email: this.createCompanyForm.value.CompanyEmail,
      Description: this.createCompanyForm.value.CompanyDescription,
      StorageCover: '66474c8ef2c08042129f18db',
      StorageAvatar: '66474c0af2c08042129f18d9',
      Avatar:"https://storage.googleapis.com/storagedoan.appspot.com/images/imgOfCompCompany/79e11369-e32c-4ddb-a266-2f4afab81e87-company.png?GoogleAccessId=firebase-adminsdk-8r86k%40storagedoan.iam.gserviceaccount.com&Expires=4162813200&Signature=cHVyHd5LCnN5VqOsOFbIu1ATwbPz8r60VbvrOtY56E0mkEzcybOaO66qDaK5XjPr14ynQDxXu0Mxfa8dxwhGzG36NZ4TpeXAzLkex%2FMIIm2%2BVNjxp92K%2Bl%2Bw1v%2BZikgmwr2bO0ZT8Mdn8Os0twVI3lI8GBZPSVDIIj7efCPdzugPHPbBW64w44CmgF0cqA%2FjjU0rbpKW6xuOUO6fWnH7RnKYEstQvR2%2FRH7IbHGbEtJrnwL1RrdsqV87bCbfbUSUGELZeXJiGPAROmVskXZXOWqRQ4RdWf9WOdxrBZd4nE4wOglRhFPnzZui7r9fxHq59MRYqcYas21xwG%2BlAt8s4w%3D%3D",
      Cover:"https://storage.googleapis.com/storagedoan.appspot.com/images/imgOfCompCompany/baa35b97-4f3d-4556-9b53-92e02185b71c-coverCompany.png?GoogleAccessId=firebase-adminsdk-8r86k%40storagedoan.iam.gserviceaccount.com&Expires=4162813200&Signature=B4v6cDFKPI9yacWY8H1fPaV7HogLf3t2rjGZRa6po1%2FyMRidc7CASU5qFxl%2FSZMpj6Asr03uCCwKB42vb1OXdWyY%2FJ34XSA7RlHQk%2BNDOZNkbnxI%2B%2FJA4kDyb9Z8pqwruSsCXTrWUE9Ac9xLa2%2B0hDjjqvmx8pxFp9wVTeDOkqbVz4Rr2VzUcSX7B%2FwtQrO2PHQ5zLaZ2C52bZ%2BPpH4QS8kFzqGo%2FqYMuB5Y64p7uTUKC%2BRw6A7%2BMnM4JFc28Ia0IMpjKd7Ib0B8zaIEuOE6Na4STroEkwDIhlNyWlKYYdUU90IvT5trdOLvc7fCC6yS9Q1UtUQrtkyuk7ZGFciKOg%3D%3D",
      JobQuantity: 0,
    }
    if(!companyData?.Name?.length && !companyData?.Address?.length && !companyData?.Field?.length && !companyData.Phone?.length && !companyData?.Email?.length && !companyData?.Description?.length){
      console.log('companyData?.Name?.length', companyData?.Name?.length);
      console.log('companyData?.Address?.length', companyData?.Address?.length);
      console.log('companyData?.Field?.length', companyData?.Field?.length);
      console.log('companyData.Phone', companyData.Phone);
      console.log('companyData?.Email?.length', companyData?.Email?.length);
      console.log('companyData?.Description?.length', companyData?.Description?.length);

      
      this.alerts
      .open('', {label: 'Bạn đã nhập thiếu thông tin !!!',status:'error'})
      .subscribe();
    }else{
      sessionStorage.setItem('companyToRegister', JSON.stringify(companyData));
      this.router.navigate(['recruiterLayout/basic-information']);
    }

    
  }
}
