import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';
import { ActivatedRoute, Router } from '@angular/router';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [TaigaModule,ShareModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
})
export class BasicInformationComponent {


  //ngrx of career
  careersTakenByGetAllAtCreateProfile$ = this.store.select('career', 'careersTakenByGetAllAtCreateProfile');
  careersTakenByGetByFieldAtProfile$ = this.store.select('career', 'careersTakenByGetByFieldAtProfile');

  //ngrx of field
  fieldsTakenByGetAllNoLimitAtCreateProfile$ = this.store.select('field', 'fieldNoLimitAtCreateProfile');


  fieldList:  Field[] = [];
  careerList:  Career[] = [];

  constructor(
    private store : Store<{ field: FieldState, career: CareerState}>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    const candidate = sessionStorage.getItem('candidate');
    console.log(candidate);
    const userAsJson = sessionStorage.getItem('user');
    console.log(userAsJson);
    this.store.dispatch(FieldActions.getAllNoLimitAtCreaetProfile());
    this.store.dispatch(CareerActions.getAllAtCreateProfile());

    this.careersTakenByGetAllAtCreateProfile$.subscribe(careers=>{
      console.log(careers);
      if(careers.length > 0){
        this.careerList = careers;
       
      }
    });

    this.fieldsTakenByGetAllNoLimitAtCreateProfile$.subscribe(fields=>{
      console.log(fields);
      if(fields.length > 0){
        this.fieldList = fields;
      }
    });

    this.careersTakenByGetByFieldAtProfile$.subscribe(careers=>{
      console.log(careers);
      if(careers.length > 0){
        this.careerList = careers;
      }
    });


  }

  onFieldChange(event: any) {
    this.store.dispatch(CareerActions.getByFieldAtProfile({field: event}));
    
  }
  readonly items = [
    {
        name: 'Simple',
        description: 'Something usual',
    },
    {
        name: 'Advanced',
        description: 'Something better',
    },
    {
        name: 'PRO',
        description: 'Something cool',
    },
  ];
  
  readonly testForm = new FormGroup({
    Datetime: new FormControl(new TuiDay(2017, 2, 15)),
    Phone: new FormControl(''),
    Position: new FormControl('',[Validators.required]),
    Experience: new FormControl('',[Validators.required]),
    Career: new FormControl('',[Validators.required]),
    Field: new FormControl('',[Validators.required]),
    
  });

  readonly items1 = [
    'John Cleese',
    'Eric Idle',
    'Graham Chapman',
    'Michael Palin',
    'Terry Gilliam',
    'Terry Jones',
];



value = '';



}
