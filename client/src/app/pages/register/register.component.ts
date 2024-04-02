import { Component } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { candidateState } from '../../ngrx/states/candidate.state';
import * as CandidateActions from '../../ngrx/actions/candidate.actions';
import { User } from '../../models/user.model';
import { generateUuid } from '../../../environments/environments';
import { AuthState } from '../../ngrx/states/auth.state';
import * as AuthActions from '../../ngrx/actions/auth.actions';
import { UserState } from '../../ngrx/states/user.state';
import * as UserActions from '../../ngrx/actions/user.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {

  //ngrx of Auth
  userFirebase$ = this.store.select('auth', 'userAtregister');


  //ngrx of user
  userTakenByGmailWithGoogleAtRegister$ = this.store.select('user', 'userTakenByUsernameWithGoogleAtRegister');
  isCreateUserWithGoogleAtRegisterSuccess$ = this.store.select('user', 'isCreateWithGoogleAtRegisterSuccess');

  //ngrx of candidate
  candidateTakenByUserWithGoogleAtRegister$ = this.store.select('candidate', 'candidateTakenByUserWithGoogleAtRegister');


  userLoginWithGoogle: User = <User>{};

  constructor(
    private router: Router,
    private store: Store<{candidate: candidateState, auth: AuthState, user: UserState}>
    ) {

      // kiểm tra login with google thành công hay chưa r gọi action getUserByGmailWithGoogleAtLogin
      this.userFirebase$.subscribe(User=>{
        if(User.email.length > 0){
          console.log(User);
          this.userLoginWithGoogle.Username = User.email ?? '';
          this.userLoginWithGoogle.Password = "1234";
          this.userLoginWithGoogle.Uid = User.uid;
          this.store.dispatch(UserActions.getUserByGmailWithGoogleAtRegister({username: this.userLoginWithGoogle.Username}));
        }
      });

      this.userTakenByGmailWithGoogleAtRegister$.subscribe(user=>{
        if(user.Username.length > 0){
          if (user.Username == "404 user not found" ) {
            //không có user thì tạo user
            const userAsJsoBth = JSON.stringify(this.userLoginWithGoogle);
            sessionStorage.setItem('userUseForLonginWothGoogle', userAsJsoBth);
            console.log(user);
            this.store.dispatch(UserActions.createWithGoogoleAtRegister({user: this.userLoginWithGoogle}));      
            
          }
          else{
               //có user thì kiểm tra user có profile chưa
               console.log(user);
               const userAsJsoBth = JSON.stringify(user);
               sessionStorage.setItem('userUseForLonginWothGoogle', userAsJsoBth);
            this.store.dispatch(CandidateActions.getByUserWithGoogleAtRegister({user: user._id}))

          }
        }
      });

      this.candidateTakenByUserWithGoogleAtRegister$.subscribe(candidate=>{
        if (candidate._id.length > 0) {
          if (candidate._id == "404 candidate not found") {
            this.router.navigate(['createProfile/personal-information']);
          }
          else{
            this.router.navigate(['/home']);
          }
        }
      });
      this.isCreateUserWithGoogleAtRegisterSuccess$.subscribe(isSuccess=>{
        if (isSuccess) {
          this.router.navigate(['createProfile/personal-information']);
        }
      } );
     }

  register(){
    let regisUser: any= {
      Uid: generateUuid(),
      Username: this.regisForm.value.Name ?? '',
      Password: this.regisForm.value.Password??'',
    }
    const userAsJsoBth = JSON.stringify(regisUser);
    sessionStorage.setItem('userUseForLonginWothGoogle', userAsJsoBth);
    const formData = this.regisForm.value;
    console.log(formData);
    
    if(this.regisForm.value.Password !== this.regisForm.value.ConfirmPassword){
      alert('Password and Confirm Password are not the same');
      return;
    }
    this.store.dispatch(UserActions.createWithGoogoleAtRegister({user: regisUser}));
  }
   regisForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
  });

  registerWithGoogle(){
    this.store.dispatch(AuthActions.loginAtRegister());
  }
  
  login(){
    this.router.navigate(['/login']);
  }

}
