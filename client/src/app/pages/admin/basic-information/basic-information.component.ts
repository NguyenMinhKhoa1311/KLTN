import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminState } from '../../../ngrx/states/admin.state';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/states/auth.state';
import { generateUuid } from '../../../../environments/environments';
import * as AdminActions from '../../../ngrx/actions/admin.actions';
import * as AuthActions from '../../../ngrx/actions/auth.actions';

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

  //ngrx of admin
  recruiterCreated$ = this.store.select('admin','admincreatedAtRegister')

  //ngrx of auth
  tokenTakenAtRegisterOfAdmin$ = this.store.select('auth', 'tokenAtRegisterOfAdmin');

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  constructor(
    private store: Store<{ admin: AdminState , auth: AuthState}>,
    private router: Router
  ) {
    const userAsJson = sessionStorage.getItem('userOfAdmin');
    console.log(userAsJson);
    if(userAsJson){
      this.user = JSON.parse(userAsJson || '');
      console.log(this.user);
    }
    this.subscriptions.push(
      this.recruiterCreated$.subscribe((recruiter) => {
          if(recruiter._id){
            sessionStorage.setItem('recruiterLoged', JSON.stringify(recruiter));
            const userToGetToken : any = {
              username: this.user.Username,
              password: this.user.Password
            }
            this.store.dispatch(AuthActions.getTokenAtRegisterOfAdmin({user: userToGetToken}));
          }
      }),
      this.tokenTakenAtRegisterOfAdmin$.subscribe((token) => {
        if(token.token){
          sessionStorage.setItem('tokenOfRecruiter', token.token);
          this.router.navigate(['admin/job-confirm']);
        }
      })
    );
  }


  adminRegisterForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
  });
  registerRecruiter(): void {
    const newAdmin: any= {
      AdminId: generateUuid(),
      Name: this.adminRegisterForm.value.Name,
      Phone: this.adminRegisterForm.value.Phone,
      Address: this.adminRegisterForm.value.Address,
      StatusConfirm: false,
    }
    console.log('registerRecruiter');
    this.store.dispatch(AdminActions.createAtRegister({ admin: newAdmin }));
  }



}
