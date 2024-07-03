import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Subscription } from 'rxjs';
import { AdminState } from '../../../ngrx/states/admin.state';
import { UserState } from '../../../ngrx/states/user.state';
import { AuthState } from '../../../ngrx/states/auth.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TuiAlertService } from '@taiga-ui/core';
import * as AuthAcitons from '../../../ngrx/actions/auth.actions';
import * as UserActions from '../../../ngrx/actions/user.actions';
import * as AdminActions from '../../../ngrx/actions/admin.actions';
import { generateUuid } from '../../../../environments/environments';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnDestroy {

  //variables
  userLoged:any = {
    Username: '',
    Password: '',
    Uid: '',
    _id: '',
  }

  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  //ngrx of auth
  userFirebase$ = this.store.select('auth', 'userOfAdminAtLogin');
  tokenTakenAtLoginOfAdmin$ = this.store.select('auth', 'tokenAtLoginOfAdmin');

  //ngrx of user
  userTakenByGmail$ = this.store.select('user','userTakenByUsernameOfAdminAtLogin')
  userCreatedOfAdmin$ = this.store.select('user','userCreatedOfAdminAtLogin')
  userTakenByUsernameAndPassword$ = this.store.select('user','userTakenByUsernameandPasswordOfAdminAtLogin')

  //ngrx of admin
  adminTakenByUser$ = this.store.select('admin','adminGetByUserAtLogin')



  adminLoginForm = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store<{ auth: AuthState, user: UserState, admin: AdminState}>,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) {
    this.subscriptions.push(
      this.userCreatedOfAdmin$.subscribe((user) => {
        if(user._id){
          if(user._id.length>0){
            const userAsJson =  JSON.stringify(user);
            sessionStorage.setItem('userOfAdmin', userAsJson);
            this.router.navigate(['admin/basic-information']);
          }
        }
      }),
      this.adminTakenByUser$.subscribe((admin) => {
        if(admin._id){
          if(admin._id!='500'){
            sessionStorage.setItem('adminLogged', JSON.stringify(admin));
            console.log(this.userLoged,"this.userLoged");
            
            const userToGetToken : any = {
              username: this.userLoged.Username,
              password: this.userLoged.Password
            }
            console.log(userToGetToken,"userToGetToken");
            
            this.store.dispatch(AuthAcitons.getTokenAtLoginOfAdmin({user: userToGetToken}));
          }else{
            sessionStorage.setItem('userOfAdmin', JSON.stringify(this.userLoged));
            this.router.navigate(['admin/basic-information']);
          }
        }
      }),
      this.tokenTakenAtLoginOfAdmin$.subscribe((token) => {
        console.log(token.token);
        
        if(token.token){
          sessionStorage.setItem('tokenOfAdmin', token.token);
          this.router.navigate(['admin/job-confirm']);
          console.log('chuyển trang');
          
        }
      }),
      this.userTakenByUsernameAndPassword$.subscribe((user) => {
        if(user._id){
          if(user._id != '404 user not found'){
            this.userLoged._id = user._id;
            this.userLoged.Username = user.Username;
            this.userLoged.Password = user.Password;
            console.log(this.userLoged,"this.userLoged");
            this.store.dispatch(AdminActions.getByUserAtLogin({user: user._id}));
          }else{
            this.alerts
            .open('', {label: 'Sai mật khẩu hoặc tài khoản !!!',status:'error'})
            .subscribe();
          }
        }
      })
    )
  }

  loginWitAccount(): void {
    this.store.dispatch(UserActions.getByUsernameAndPasswordOfAdminAtLogin({username: this.adminLoginForm.value.Username??"",password: this.adminLoginForm.value.Password??""}));
  }
  register(): void {
    this.router.navigate(['admin/register']);
  }



}
