import { Component, OnDestroy } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TuiAlertService } from '@taiga-ui/core';
import { UserState } from '../../../ngrx/states/user.state';
import * as UserActions from '../../../ngrx/actions/user.actions';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.scss'
})
export class ForgotPassComponent implements OnDestroy{

  subscriptions: Subscription[] = [];

  //variables
  token: string = "";

  //ngrx of user
  userchangeDPassOfRecruiter$ = this.store.select('user', 'userChangedPassOfRecruiter');


  constructor(
    private route: ActivatedRoute,
    private store : Store<{user: UserState }>,
    private readonly alerts: TuiAlertService,
    private router: Router,
    ) {
 this.token =  this.route.snapshot.queryParamMap.get('token') ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ndXllbm1pbmhraG9hMTMxMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE3MTY5NjI4MDUsImV4cCI6MTcxNjk2Mjg2NX0.Oho820kg-qY4SLNv5sWmSk-K9LLyosXgOnoSUtu1mmQ";
      if(this.token){
        //this.router.navigate(['/home']);
      }
      this.subscriptions.push(
        this.userchangeDPassOfRecruiter$.subscribe((user) => {
          console.log(user);
          if(user._id){
            if(user._id != '500'){
              this.alerts
              .open('', {label: 'Cập nhật mật khẩu thành công',status:'success'})
              .subscribe();
              console.log('success');
              this.router.navigate(['/login']);
            }
          }
        }),
      )
    }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  changePass(){
    if(this.forgotPass.value.pass === this.forgotPass.value.passConfirm){
      this.store.dispatch(UserActions.changePassOfCandidate({ token: this.token,password: this.forgotPass.value.pass??""})); 
    }
  }

  forgotPass = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
    passConfirm: new FormControl('', [Validators.required])
  })
}
