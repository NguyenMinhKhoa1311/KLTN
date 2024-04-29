import { Component, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserState } from '../../../ngrx/states/user.state';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/states/auth.state';
import { Router } from '@angular/router';
import * as UserActions from '../../../ngrx/actions/user.actions';
import * as RecruiterActions from '../../../ngrx/actions/recruiter.actions';
import * as AuthAcitons from '../../../ngrx/actions/auth.actions';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import { generateUuid } from '../../../../environments/environments';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnDestroy {

  subscriptions: Subscription[] = [];

  //variables
  userLoged:any = {
    Username: '',
    Password: '',
    Uid: '',
    _id: '',
  };

  //ngrx state for auth
  userFirebase$ = this.store.select('auth', 'userOfRecruiterAtLogin',);

  //ngrx of user
  userTakenByGmail$ = this.store.select('user','userTakenByUsernameOfRecruiterAtLogin')
  userCreatedOfRecruiter$ = this.store.select('user','usercreatedOfRecruiterAtLogin')
  userTakenByUsernameAndPassword$ = this.store.select('user','userTakenByUsernameAndPasswordOfRecruiterAtLogin')

  //ngrx of recruiter
  recruiterTakenByUser$ = this.store.select('recruiter','recruiterTakenByUserAtLogin')
  
  recruiterLoginForm = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store<{ auth: AuthState, user: UserState, recruiter: RecruiterState}>,
    private router: Router
  ) {
    this.subscriptions.push(
      this.userFirebase$.subscribe((user) => {
        if (user.email) {
          if(user.email.length>0){
            console.log('user', user);
            this.userLoged.Username = user.email;
            this.store.dispatch(UserActions.getByGmailOfRecruiterAtLogin({ Username: user.email }));
          }
        }
      }),
      this.userTakenByGmail$.subscribe((user) => {
          if (user._id) {
            if (user.Username != "404 user not found" ) {
              this.userLoged._id = user._id;
              this.store.dispatch(RecruiterActions.getByUserAtLogin({ user: user._id }));
            }else{
              this.userLoged.Password = "1234";
              this.userLoged.Uid = generateUuid();
              this.store.dispatch(UserActions.createUserOfRecruiterAtLogin({ user: this.userLoged}))
            }
          }
      }),
      this.userCreatedOfRecruiter$.subscribe((user) => {
          if (user._id) {
            if (user._id.length >0) {
              console.log('user', user);
              
              const userAsJson = JSON.stringify(user);
              sessionStorage.setItem('userOfRecruiterLogged', userAsJson);
              this.router.navigate(['recruiterLayout/basic-information']);
              
            }
        }
      }),
      this.recruiterTakenByUser$.subscribe((recruiter) => {
        if (recruiter) {
          if (recruiter._id) {
            console.log('recruiter', recruiter);
            
            if (recruiter._id == "500") {
              this.router.navigate(['recruiterLayout/basic-information']);
              console.log('recruiter', recruiter);
              sessionStorage.setItem('userOfRecruiterLogged', JSON.stringify(this.userLoged));
              
            }
            else{
              sessionStorage.setItem('recruiterLoged', JSON.stringify(recruiter));
              this.router.navigate(['recruiterLayout/job-detail']);
            }
          }
        }
      }),
      this.userTakenByUsernameAndPassword$.subscribe((user) => {
        if (user._id) {
          if (user._id != "404 user not found") {
            console.log('user', user);
            this.userLoged = user;
            this.store.dispatch(RecruiterActions.getByUserAtLogin({ user: user._id }));
          }
          else{
            alert("Sai tài khoản hoặc mật khẩu")
          }
        }
      })

    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
  loginWithGoogle() {
    this.store.dispatch(AuthAcitons.loginOfRecruiterAtLogin());
  }
  loginWithAcouunt() {
    this.store.dispatch(UserActions.getByUsernameAndPasswordOfRecruiterAtLogin({ username: this.recruiterLoginForm.value.Username??"", password: this.recruiterLoginForm.value.Password??"" }));
  }

}
