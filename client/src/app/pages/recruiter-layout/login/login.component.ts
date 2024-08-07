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
import { TuiAlertService } from '@taiga-ui/core';

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
  tokenTakenAtLoginOfRecruiter$ = this.store.select('auth', 'tokenAtLoginOfRecruiter');

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
    private router: Router,
    private readonly alerts: TuiAlertService,
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
              const newUser:any = {
                Username: this.userLoged.Username,
                Password: this.userLoged.Password,
                Uid: this.userLoged.Uid,
              }
              this.store.dispatch(UserActions.createUserOfRecruiterAtLogin({ user: newUser}))
            }
          }
      }),
      this.userCreatedOfRecruiter$.subscribe((user) => {
          if (user._id) {
            if (user._id.length >0) {
              console.log('user', user);
              
              const userAsJson = JSON.stringify(user);
              sessionStorage.setItem('userOfRecruiterLogged', userAsJson);
              this.router.navigate(['recruiterLayout/create-company']);
              
            }
        }
      }),
      this.recruiterTakenByUser$.subscribe((recruiter) => {
        if (recruiter) {
          if (recruiter._id) {
            console.log('recruiter', recruiter);
            if (recruiter._id == "500") {
              sessionStorage.setItem('userOfRecruiterLogged', JSON.stringify(this.userLoged));
              this.router.navigate(['recruiterLayout/create-company']);
              console.log('recruiter', recruiter);
            }
            else{
              if(recruiter.isBan){
                this.alerts
                .open('', {label: 'Tài khoản của bạn đã bị khóa !!!',status:'error'})
                .subscribe();
              }else{
                sessionStorage.setItem('recruiterLoged', JSON.stringify(recruiter));
                const userToGetToken: any = {
                  username: this.userLoged.Username,
                  password: this.userLoged.Password,
                }
                this.store.dispatch(AuthAcitons.getTokenAtLoginOfRecruiter({ user: userToGetToken }));
              }
            }
          }
        }
      }),
      this.tokenTakenAtLoginOfRecruiter$.subscribe((res) => {
        if (res.token) {
          console.log('tokenOfRecruiter', res);
          sessionStorage.setItem('tokenOfRecruiter', res.token);
          this.store.dispatch(RecruiterActions.haveRecruiterAtLogin());
          this.router.navigate(['recruiterLayout/job-detail']);
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
            this.alerts
            .open('', {label: 'Sai tài khoản hoặc mật khẩu !!!',status:'error'})
            .subscribe();
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
  loginWithAcount() {
    this.store.dispatch(UserActions.getByUsernameAndPasswordOfRecruiterAtLogin({ username: this.recruiterLoginForm.value.Username??"", password: this.recruiterLoginForm.value.Password??"" }));
  }

  register() {
    this.router.navigate(['recruiterLayout/register']);
  }
  navigateToForgotPass() {
    this.router.navigate(['recruiterLayout/confirm-mail']);
  }

}
