import { Component, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { generateUuid } from '../../../../environments/environments';
import * as RecruiterActions from '../../../ngrx/actions/recruiter.actions';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.less'
})
export class BasicInformationComponent implements OnDestroy {

  subscriptions: Subscription[] = [];

  //variables
  user: any ={}

  //ngrx of recruiter
  recruiterCreated$ = this.store.select('recruiter','recruiterCreatedAtRegister')

  recruiterRegisterForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
  });
  constructor(
    private store: Store<{ recruiter: RecruiterState}>,
    private router: Router
  ) {
    const userAsJson = sessionStorage.getItem('userOfRecruiterLogged');
    console.log(userAsJson);
    if(userAsJson){
      this.user = JSON.parse(userAsJson || '');
      console.log(this.user);
      
    }
    this.subscriptions.push(
      this.recruiterCreated$.subscribe((recruiter) => {
          if(recruiter._id){
            sessionStorage.setItem('recruiterLoged', JSON.stringify(recruiter));
            this.router.navigate(['recruiterLayout/job-detail']);
          }
      })
    );
  }
  registerRecruiter(){
    let recruiterToCreate:any = {
      RecruiterId: generateUuid(),
      User:this.user._id,
      Name:this.recruiterRegisterForm.value.Name,
      Email: this.user.Username,
      Voucher:[],
      Phone:this.recruiterRegisterForm.value.Phone,
      Address:this.recruiterRegisterForm.value.Address,
      Company:"11f24982baf16b4f302f3860",
      Avatar:"https://storage.googleapis.com/storagedoan.appspot.com/images/CloneAvatar/c6139be4-6e0a-4e5b-8fcd-ff75466607fb-avatar-trang-4.jpg?GoogleAccessId=firebase-adminsdk-8r86k%40storagedoan.iam.gserviceaccount.com&Expires=4162813200&Signature=vQgsNuWiC8gGsB6uky3ucxyRhILtcvRvEW6K8NDEaKD1iEkHHFD7hIMkhqrS9aDYGO7rHRvFCOjJcHZihO8smr0opYETm4HZEKoCPi1HqxRRT9XhE9fnOcDluw4NByUhi5XXsWp0YMibEvjhsLOd0hn9ZPvqT%2BdIvhgWl6lilCuLcrr9EW%2Ff4KkhP0SGY%2FN%2BjwcY7cyQZDNQc9ExqY1l2%2BXpknRuaiyzZr6wnmpBncZx7UBvBVEtrCEToVWKs3IXGZEXUiFYFIis07d0d4IzOFoqnBIMyRB7H41B6XTEse3PtWL1lBfEtIRN1vw%2FRAz2D5RuPvruynG%2FfcytoHzW4w%3D%3D",
      Storage:"65fa87ac3dcc1153af38b18d"
  }
    console.log(recruiterToCreate);
    this.store.dispatch(RecruiterActions.createRecruiterAtRegister({recruiter: recruiterToCreate}))
    
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
