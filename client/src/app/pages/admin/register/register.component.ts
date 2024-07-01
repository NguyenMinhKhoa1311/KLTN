import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthState } from '../../../ngrx/states/auth.state';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import { UserState } from '../../../ngrx/states/user.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthAcitons from '../../../ngrx/actions/auth.actions';
import * as UserActions from '../../../ngrx/actions/user.actions';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { AdminState } from '../../../ngrx/states/admin.state';
import { TuiAlertService } from '@taiga-ui/core';
import * as AdminActions from '../../../ngrx/actions/admin.actions';
import { generateUuid } from '../../../../environments/environments';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent implements OnDestroy{

  subscriptions: Subscription[] = [];


    //variables
    userLoged:any = {
      Username: '',
      Password: '',
      Uid: '',
      _id:''
    };
    //ngrx of auth
    userFirebase$ = this.store.select('auth', 'userAtregisterOfAdmin');

    //ngrx of user
    userTakenByGmail$ = this.store.select('user','userTakenByGmailOfAdminAtRegister')
    userCreatedOfAdmin$ = this.store.select('user','userCreatedOfAdminAtRegister')
    userTakenByUsernameAndPassword$ = this.store.select('user','userTakenByGmailOfAdminWithAccountAtRegister')

  
    //ngrx of admin
    adminTakenByUser$ = this.store.select('admin','adminGetBy_idAtRegister')

  constructor(
    private store: Store<{ auth: AuthState, user: UserState, admin: AdminState}>,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) { 
    this.subscriptions.push(
      this.userFirebase$.subscribe((user) => {
        
        if (user.email) {

          if(user.email.length>0){
            console.log('user', user);
            
            this.userLoged.Username = user.email;
            this.store.dispatch(UserActions.getByGmailOfAdminAtRegister({ username: user.email }));
          }
        }
      }),
      this.userTakenByGmail$.subscribe((user) => {
        if (user.Username) {
          console.log('user', user);
          
          if(user.Username != "404 user not found"){
            this.userLoged._id = user._id;
            console.log('user at have user');
            
            this.store.dispatch(AdminActions.getBy_idAtRegister({ id: user._id }));
          }else{
            this.userLoged.Password = '1234';
            this.userLoged.Uid = generateUuid();
            this.store.dispatch(UserActions.createAtRegisterOfAdmin({ user: this.userLoged }))
          }
        }
      }),
      this.userCreatedOfAdmin$.subscribe((user) => {
        if (user._id) {
          if (user._id.length >0) {
            console.log('user', user);
            const userAsJson = JSON.stringify(user);
            sessionStorage.setItem('userOfAdmin', userAsJson);
            this.router.navigate(['admin/basic-information']);
            
          }
        }
      }),
      this.adminTakenByUser$.subscribe((admin) => {
        if (admin._id) {
          if (admin._id !='500') {
            console.log('admin', admin);
            const adminAsJson = JSON.stringify(admin);
            sessionStorage.setItem('adminLogged', adminAsJson);
            this.router.navigate(['admin/job-confirm']);
          }else{
            sessionStorage.setItem('userOfAdmin', JSON.stringify(this.userLoged));
            this.router.navigate(['admin/basic-information']);
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
              Username: this.adminRegisterForm.value.Email??'',
              Password: this.adminRegisterForm.value.Password??'',
              Uid: generateUuid()
            }
            this.store.dispatch(UserActions.createAtRegisterOfAdmin({ user: userToCreate }))
          }
        }
      })
    )
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  adminRegisterForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
  });
  registerWithAccount(): void {
    if(this.adminRegisterForm.value.Password !== this.adminRegisterForm.value.ConfirmPassword){
      alert('Password and Confirm Password are not the same');
      return;
    }
    this.store.dispatch(UserActions.getByGmailOfAdminWithAccountAtRegister({ username: this.adminRegisterForm.value.Email??"" }));
  }
  loginWithGoogle(): void {
    console.log('login with google');
    
    this.store.dispatch(AuthAcitons.loginOfAdminAtRegister());
  }
}

