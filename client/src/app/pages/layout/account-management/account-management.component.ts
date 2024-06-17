import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../../../ngrx/states/user.state';
import { TuiAlertService } from '@taiga-ui/core';
import { Candidate } from '../../../models/candidate.model';
import * as UserActions from '../../../ngrx/actions/user.actions';
import { User } from '../../../models/user.model';
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


  //ngrx of user
  userTakenByUsername$ = this.store.select('user','userTakenByUsernameAtUserManagementOfCandidate');
  userUpdated$ = this.store.select('user','userChangedPassOfCandidateWithoutToken');

  //ngrx of auth
  newToken$ = this.store.select('auth', 'tokenAtUserManagementOfCandidate');
  
  //variables
  candidateLogin: Candidate = <Candidate>{};
  userToRender: User = <User>{};
  token: string = "";

  constructor(
    private store: Store<{
      user: UserState;
      auth: AuthState;
    }>,
    private readonly alerts: TuiAlertService,
  ){
    let token = sessionStorage.getItem('tokenOfCandidate');
    if(token){
      this.token = token;
    }
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        console.log(userAfterParse);
        this.candidateLogin = userAfterParse;
        this.store.dispatch(UserActions.getUserByUsernameAtUserManagementOfCandidate({username: this.candidateLogin.User.Username}))
      }
    }
    this.subscriptions.push(
      this.userTakenByUsername$.subscribe(user => {
        if(user){
          this.userToRender = user;
          console.log(this.userToRender);

          
        }
      }),
      this.userUpdated$.subscribe(user => {
        if(user._id){
          if(user._id != "500"){
            this.closeForgotPassDialog()
            this.alerts
            .open('', {label: 'Đổi mật khẩu thành công',status:'success'})
            .subscribe();
            this.userToRender=user;
            const newUser: any = {
              username: this.userToRender.Username,
              password: this.forgotPass.value.NewPass
            }
            this.store.dispatch(AuthActions.getTokenAtUserManagementOfCandidate({user: newUser}));
          }
        }
      }),
      this.newToken$.subscribe(res => {
        if(res.token){
          console.log(res);
          
          console.log(res.token);
          
          sessionStorage.setItem('tokenOfCandidate', res.token);
          this.token = res.token;
        }
      })
    )

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  updatePass(){
    if(this.forgotPass.value.NewPass == this.forgotPass.value.ConfirmPass){
      this.store.dispatch(UserActions.changePassOfCandidateWithoutToken({username: this.userToRender.Username, password: this.forgotPass.value.NewPass??"",token: this.token}))
    }else{
      this.alerts
      .open('', {label: 'Mật khẩu xác nhận không khớp',status:'error'})
      .subscribe();
    }
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
