import { Component, OnDestroy } from '@angular/core';
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
import { UserState } from '../../../ngrx/states/user.state';
import * as UserActions from '../../../ngrx/actions/user.actions';
import { User } from '../../../models/user.model';
import { Candidate } from '../../../models/candidate.model';
import { candidateState } from '../../../ngrx/states/candidate.state';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { generateUuid } from '../../../../environments/environments';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [TaigaModule,ShareModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.less',
})
export class BasicInformationComponent implements OnDestroy {


  subscriptions: Subscription[] = [];

  //ngrx of career
  careersTakenByGetAllAtCreateProfile$ = this.store.select('career', 'careersTakenByGetAllAtCreateProfile');
  careersTakenByGetByFieldAtProfile$ = this.store.select('career', 'careersTakenByGetByFieldAtProfile');

  //ngrx of field
  fieldsTakenByGetAllNoLimitAtCreateProfile$ = this.store.select('field', 'fieldNoLimitAtCreateProfile');

  //ng rx of user
  userTakenByUsernameAtCreateProfile$ = this.store.select('user', 'userTakenByUsernameAtCreateProfile');

  //ngrx of candidate
  isCreateCandidateAtCreateProfileSuccess$ = this.store.select('candidate', 'isCreateCandidateAtCreateProfileSuccess');
  candidateCreatedAtCreateProfile$ = this.store.select('candidate', 'candidateCreatedAtCreateProfile');


  fieldList:  Field[] = [];
  careerList:  Career[] = [];
  user: User= <User>{}
  candidateSesion: Candidate = <Candidate>{};
  candidateToRegister: any ={};
  readonly testForm = new FormGroup({
    Position: new FormControl('',[Validators.required]),
    Experience: new FormControl('',[Validators.required]),
    Career: new FormControl('',[Validators.required]),
    Field: new FormControl('',[Validators.required]),
    
  });

  constructor(
    private store : Store<{ field: FieldState, career: CareerState, user: UserState, candidate: candidateState}>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

    // lấy sesion từ những trang trước
    const candidate = sessionStorage.getItem('candidate');
    console.log(candidate);
    if(candidate){
      this.candidateSesion = JSON.parse(candidate || '');
      console.log(this.candidateSesion);
    }
    const userAsJson = sessionStorage.getItem('userUseForLonginWothGoogle');
    console.log(userAsJson);
    if(userAsJson){
      this.user = JSON.parse(userAsJson || '');
      console.log(this.user);
      
    }

    //lấy từ sesin xong thì gọi lấy user đã tạo
    this.store.dispatch(UserActions.getUserByGmailAtCreateProfile({username: this.user.Username}));

    // lấy field, career để render
    this.store.dispatch(FieldActions.getAllNoLimitAtCreaetProfile());
    this.store.dispatch(CareerActions.getAllAtCreateProfile());

    this.subscriptions.push(
          // lắng nghe action
    this.careersTakenByGetAllAtCreateProfile$.subscribe(careers=>{
      console.log(careers);
      if(careers.length > 0){
        this.careerList = careers;
      }
    }),

    // lắng nghe action
    this.fieldsTakenByGetAllNoLimitAtCreateProfile$.subscribe(fields=>{
      console.log(fields);
      if(fields.length > 0){
        this.fieldList = fields;
      }
    }),

    // lắng nghe action
    this.careersTakenByGetByFieldAtProfile$.subscribe(careers=>{
      console.log(careers);
      if(careers.length > 0){
        this.careerList = careers;
      }
    }),

    // lắng nghe action
    this.userTakenByUsernameAtCreateProfile$.subscribe(user=>{
      console.log(user);
      if(user._id.length > 0){
        this.user = user;
      }
    }),

    // lắng nghe action
    this.candidateCreatedAtCreateProfile$.subscribe(candidate=>{
      if(candidate._id.length > 0){
        console.log('create candidate success');
        sessionStorage.setItem('userLogged', JSON.stringify(candidate));
        this.router.navigate(['createProfile/create-success']);
      }
    })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  onFieldChange(event: any) {
    this.store.dispatch(CareerActions.getByFieldAtProfile({field: event}));
    
  }

  registerCandidate() {
    this.candidateToRegister={
      CandidateId: generateUuid(),
      Name: this.candidateSesion.Name,
      DateOfBirth: this.candidateSesion.DateOfBirth,
      Gender: this.candidateSesion.Gender,
      Address: this.candidateSesion.Address,
      Phone: this.candidateSesion.Phone,
      Email: this.user.Username,
      Position: this.testForm.value.Position,
      User: this.user._id,
      Career: this.testForm.value.Career,
      Field: this.testForm.value.Field,
      Experience: this.testForm.value.Experience,
      WorkExperience: [],
      Languages:[],
      DesiredJob: "661543f17cf1d756f3f372a0",
      Avatar:"https://storage.googleapis.com/storagedoan.appspot.com/images/CloneAvatar/c6139be4-6e0a-4e5b-8fcd-ff75466607fb-avatar-trang-4.jpg?GoogleAccessId=firebase-adminsdk-8r86k%40storagedoan.iam.gserviceaccount.com&Expires=4162813200&Signature=vQgsNuWiC8gGsB6uky3ucxyRhILtcvRvEW6K8NDEaKD1iEkHHFD7hIMkhqrS9aDYGO7rHRvFCOjJcHZihO8smr0opYETm4HZEKoCPi1HqxRRT9XhE9fnOcDluw4NByUhi5XXsWp0YMibEvjhsLOd0hn9ZPvqT%2BdIvhgWl6lilCuLcrr9EW%2Ff4KkhP0SGY%2FN%2BjwcY7cyQZDNQc9ExqY1l2%2BXpknRuaiyzZr6wnmpBncZx7UBvBVEtrCEToVWKs3IXGZEXUiFYFIis07d0d4IzOFoqnBIMyRB7H41B6XTEse3PtWL1lBfEtIRN1vw%2FRAz2D5RuPvruynG%2FfcytoHzW4w%3D%3D",
      Storage:"65f8390d13079793cbb2101d",
      FavoriteJobs:[],
      Skills:[],
      Education:[],
      CareerGoal:"",
      References:[],
    }
    console.log(this.candidateToRegister);
    this.store.dispatch(CandidateActions.createCandidateAtCreateProfile({candidate: this.candidateToRegister}))
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
