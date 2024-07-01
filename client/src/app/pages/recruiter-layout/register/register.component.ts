import { Component, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/states/auth.state';
import { UserState } from '../../../ngrx/states/user.state';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import { Router } from '@angular/router';
import * as UserActions from '../../../ngrx/actions/user.actions';
import * as RecruiterActions from '../../../ngrx/actions/recruiter.actions';
import * as AuthAcitons from '../../../ngrx/actions/auth.actions';
import { Subscription } from 'rxjs';
import { generateUuid } from '../../../../environments/environments';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent implements OnDestroy {
  recruiterRegisterForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
  });

  subscriptions: Subscription[] = [];

  //variables
  userLoged:any = {
    Username: '',
    Password: '',
    Uid: '',
    _id:''
  };


  //ngrx of auth
  userFirebase$ = this.store.select('auth', 'userOfRecruiterAtRegister');
  
  
  //ngrx of user
  userTakenByGmail$ = this.store.select('user','userTakenByUsernameOfRecruiterAtRegister')
  userCreatedOfRecruiter$ = this.store.select('user','usercreatedOfRecruiterAtRegister')
  userTakenByUsernameAndPassword$ = this.store.select('user','userTakenByUsernameOfRecruiterWithAccountAtRegister')

  //ngrx of recruiter
  recruiterTakenByUser$ = this.store.select('recruiter','recruiterTakenByUserAtRegister')


  constructor(
    private store: Store<{ auth: AuthState, user: UserState, recruiter: RecruiterState}>,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) {
    this.subscriptions.push(
      this.userFirebase$.subscribe((user) => {
        if (user.email) {

          if(user.email.length>0){
            this.userLoged.Username = user.email;
            this.store.dispatch(UserActions.getByGmailOfRecruiterAtRegister({ Username: user.email }));
          }
        }
      }),
      this.userTakenByGmail$.subscribe((user) => {
        if (user.Username) {
          if(user.Username != "404 user not found"){
            this.userLoged._id = user._id;
            this.store.dispatch(RecruiterActions.getByUserAtRegister({ user: user._id }));
          }else{
            this.userLoged.Password = '1234';
            this.userLoged.Uid = generateUuid();
            this.store.dispatch(UserActions.createUserOfRecruiterAtRegister({ user: this.userLoged }))
          }
        }
      }),
      this.userCreatedOfRecruiter$.subscribe((user) => {
        if (user._id) {
          if (user._id.length >0) {
            console.log('user', user);
            
            const userAsJson = JSON.stringify(user);
            sessionStorage.setItem('userOfRecruiter', userAsJson);
            this.router.navigate(['recruiterLayout/create-company']);
            
          }
        }
      }),
      this.recruiterTakenByUser$.subscribe((recruiter) => {
        console.log('recruiter', recruiter);
        
          if (recruiter._id) {
            console.log('recruiter', recruiter);
            if (recruiter._id == "500") {
              sessionStorage.setItem('userOfRecruiter', JSON.stringify(this.userLoged));
              this.router.navigate(['recruiterLayout/create-company']);
            }
            else{
              sessionStorage.setItem('userOfRecruiterLogged', JSON.stringify(recruiter));
              this.router.navigate(['recruiterLayout/job-detail']);
            }
          }
      }),
      this.userTakenByUsernameAndPassword$.subscribe((user) => {
        if (user._id) {
          if (user._id != "404 user not found") {
            console.log('user', user);
            this.alerts
            .open('', {label: 'Tài khoản đã tồn tại',status:'info'})
            .subscribe();
          }else{
            let userToCreate:any = {
              Username: this.recruiterRegisterForm.value.Email??'',
              Password: this.recruiterRegisterForm.value.Password??'',
              Uid: generateUuid()
            }
            this.store.dispatch(UserActions.createUserOfRecruiterAtRegister({ user: userToCreate }))
          }
        }
      })
    )

  }
  registerWithAccount(): void {
    if(this.recruiterRegisterForm.value.Password !== this.recruiterRegisterForm.value.ConfirmPassword){
      this.alerts
            .open('', {label: 'Mật khẩu và mật khẩu xác nhận không trùng khớp',status:'info'})
            .subscribe();
      return;
    }
    this.store.dispatch(UserActions.getByGmailOfRecruiterWithAccountAtRegister({ username: this.recruiterRegisterForm.value.Email??"" }));
  }
  loginWithGoogle(): void {
    console.log('login with google');
    
    this.store.dispatch(AuthAcitons.loginOfRecruiterAtRegister());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
