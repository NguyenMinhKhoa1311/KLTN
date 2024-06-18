import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as UserActions from '../../../ngrx/actions/user.actions';
import { User } from '../../../models/user.model';
import { UserState } from '../../../ngrx/states/user.state';
import { Store } from '@ngrx/store';
import { TuiAlertService } from '@taiga-ui/core';
import { Recruiter } from '../../../models/recruiter.model';
import { AuthState } from '../../../ngrx/states/auth.state';
import * as AuthActions from '../../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-account-management',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.less'
})
export class AccountManagementComponent implements OnDestroy{

  subscriptions: Subscription[] = [];

  //variables
  userToRender: User = <User>{};
  token: string = "";
  userLogged: Recruiter = <Recruiter>{};

  //ngrx of user
  userTakenByUsername$ = this.store.select('user','userTakenByUsernameAtUserManagementOfRecruiter');
  userUpdated$ = this.store.select('user','userChangedPassOfRecruiterWithoutToken');

  //ngrx of auth
  newToken$ = this.store.select('auth', 'tokenAtUserManagementOfRecruiter');


  constructor(
    private store: Store<{
      user: UserState;
      auth: AuthState;
    }>,
    private readonly alerts: TuiAlertService,
  ){
    let token = sessionStorage.getItem('tokenOfRecruiter');

    let userLogged = sessionStorage.getItem('recruiterLoged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Recruiter;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.userLogged = userAfterParse;
        this.store.dispatch(UserActions.getUserByUsernameAtUserManagementOfRecruiter({username: this.userLogged.User.Username}))
      }}
      if(token){
        this.token = token;
        console.log(this.token);
        
      }
    this.subscriptions.push(
      this.userTakenByUsername$.subscribe(user => {
        if(user){
          this.userToRender = user;
        }
      }),
      this.userUpdated$.subscribe(user => {
        if(user._id){
          if(user._id != "500"){
            this.closeForgotPassDialog()
            this.alerts
            .open('', {label: 'Đổi mật khẩu thành công',status:'success'})
            .subscribe();
            const newUser: any = {
              username: this.userToRender.Username,
              password: this.forgotPass.value.NewPass
            }
            console.log(newUser);
            this.userToRender= user;
            
            this.store.dispatch(AuthActions.getTokenAtUserManagementOfRecruiter({user: newUser}));
          }
        }
      }),
      this.newToken$.subscribe(res => {
        if(res.token){
          console.log(token);
          sessionStorage.setItem('tokenOfRecruiter', res.token);
          this.token = res.token;
        }
      })
    );
  }


  updatePass(){
    
    if(this.forgotPass.value.NewPass == this.forgotPass.value.ConfirmPass){
      console.log(this.token);
      
      this.store.dispatch(UserActions.changePassOfRecruiterWithoutToken({username: this.userToRender.Username, password: this.forgotPass.value.NewPass??"",token: this.token}))
    }else{
      this.alerts
      .open('', {label: 'Mật khẩu xác nhận không khớp',status:'error'})
      .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  @ViewChild('forgotPassDialog', { static: true })
  forgotPassDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openForgotPassDialog() {
    this.forgotPassDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeForgotPassDialog() {
    this.forgotPassDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  forgotPass = new FormGroup({
    CurentPass: new FormControl('', [Validators.required]),
    NewPass: new FormControl('', [Validators.required]),
    ConfirmPass: new FormControl('', [Validators.required])
  });
}
