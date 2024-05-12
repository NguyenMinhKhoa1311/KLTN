import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';
import * as AuthAcitons from '../../ngrx/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/states/auth.state';
import { Router } from '@angular/router';
import { UserFirebase } from '../../models/userFirebase.model';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import * as UserActions from '../../ngrx/actions/user.actions';
import * as CandidateActions from '../../ngrx/actions/candidate.actions';
import { UserState } from '../../ngrx/states/user.state';
import { User } from '../../models/user.model';
import { candidateState } from '../../ngrx/states/candidate.state';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements  OnDestroy {
  subscriptions: Subscription[] = [];
  userLogged: any = {
    username: "",
    password: "",
  };
  

  //ngrx state for auth
  userFirebase$ = this.store.select('auth', 'user',);
  tokenTakenAtLoginOfCandidate$ = this.store.select('auth', 'tokenAtLoginOfCandidate');



  //ngrx state for user

  userTakenByGmailWithGoogleAtLogin$ = this.store.select('user', 'userTakenByUsernameWithGoogleAtLogin');
  isCreateUserWithGoogleAtLoginSuccess$ = this.store.select('user', 'isCreateWithGoogleAtLoginSuccess');
  userTakenByUsernameAndPasswordAtLogin$ = this.store.select('user', 'userTakenByUsernameAndPasswordAtLogin');
  userLoginWithGoogle: User = <User>{};

  //ngrx state for candidate
  isGetCadidateWithGoogleAtLoginSuccess$ = this.store.select('candidate', 'isGetByUserWithGoogleAtLoginSuccess');
  candidateTakenByUserWithGoogleAtLogin$ = this.store.select('candidate', 'candidateTakenByUserWithGoogleAtLogin');


  userUseForLoginWithGoogleAtLogin: User = <User>{};
  
  readonly loginForm = new FormGroup({
    Username: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),    
  });





  constructor (

    private store: Store<{ auth: AuthState, user: UserState, candidate: candidateState}>,
    private router: Router
    ) {

      this.subscriptions.push(
            // kiểm tra login with google thành công hay chưa r gọi action getUserByGmailWithGoogleAtLogin
            this.userFirebase$.subscribe(User=>{
              if(User.email){
                if(User.email.length > 0){
                console.log(User);
                this.userLoginWithGoogle.Username = User.email ?? '';
                this.userLoginWithGoogle.Password = "1234";
                this.userLoginWithGoogle.Uid = User.uid;
                this.store.dispatch(UserActions.getUserByGmailWithGoogleAtLogin({Username: User.email}));
              }}
            }),
         // Kiểm tra xem có user trong database k
            this.userTakenByGmailWithGoogleAtLogin$.subscribe((user) => {
              if(user.Username){
                if(user.Username.length > 0){
                if (user.Username == "404 user not found" ) {
                   //không có user thì tạo user
                  console.log(user);
                  this.store.dispatch(UserActions.createWithGoogleAtLogin({user: this.userLoginWithGoogle}));      
                }
                else{
                      //có user thì kiểm tra user có profile chưa
                      this.userLogged.username = user.Username;
                      this.userLogged.password = user.Password;
                      console.log(user);
                      const userAsJsoBth = JSON.stringify(user);
                      sessionStorage.setItem('userUseForLonginWothGoogle', userAsJsoBth);
                      this.store.dispatch(CandidateActions.getByUserWithGoogleAtLogin({user: user._id}))
                      
                }
              }}
            }),
         // kiểm tra tạo user thành công hay chưa r chuyển qua trang register
        this.isCreateUserWithGoogleAtLoginSuccess$.subscribe((isSuccess) => {
          if (isSuccess) {
            const userAsJsoBth = JSON.stringify(this.userLoginWithGoogle);
            sessionStorage.setItem('userUseForLonginWothGoogle', userAsJsoBth);
            this.router.navigate(['createProfile/personal-information']);
          }
        }),
         // kiểm tra candidate nếu chưa có thì tạo, có r thì log vào home
        this.candidateTakenByUserWithGoogleAtLogin$.subscribe((candidate) => {
          if(candidate._id){
            if (candidate._id.length > 0) {
              if (candidate._id == "404 candidate not found") {
                this.router.navigate(['createProfile/personal-information']);
              }
              else{
                this.store.dispatch(AuthAcitons.getTokenAtLoginOfCandidate({user: this.userLogged}));
                sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              }
          }}
        }),
        // kiểm tra token nếu có thì chuyển qua trang home
        this.tokenTakenAtLoginOfCandidate$.subscribe((res) => {
          if(res.token){
            console.log(res.token);
            sessionStorage.setItem('tokenOfCandidate', res.token);
            this.router.navigate(['/home']);
          }
        }),

        this.userTakenByUsernameAndPasswordAtLogin$.subscribe((user) => {
          if(user.Username){
            if(user.Username.length > 0){
              if(user.Username == "404 user not found"){
                alert("Sai tài khoản hoặc mật khẩu")
              }
              else{
                this.userLogged.username = user.Username;
                this.userLogged.password = user.Password;
                console.log(user);
                const userAsJsoBth = JSON.stringify(user);
                sessionStorage.setItem('userUseForLonginWothGoogle', userAsJsoBth);
                this.store.dispatch(CandidateActions.getByUserWithGoogleAtLogin({user: user._id}))
            }
          }}
        }),


      )

    }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  loginWithAcouunt() {
    this.store.dispatch(UserActions.getUserByUsernameAndPasswordAtLogin({username: this.loginForm.value.Username??"", password: this.loginForm.value.Password??""}));

  }

  loginWithGoogle() {
    this.store.dispatch(AuthAcitons.login());
  }

  logoutWithGoogle() {
    this.store.dispatch(AuthAcitons.logout());
  }

  register() {
    this.router.navigate(['/register']);
  }
}


