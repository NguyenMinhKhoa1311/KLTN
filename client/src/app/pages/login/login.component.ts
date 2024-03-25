import { Component, Inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit {


  //ngrx state for auth
  userFirebase$ = this.store.select('auth', 'user',);
  isLoginWithGoogleSuccessfull$ = this.store.select('auth', 'isLoginSuccessfull');


  //ngrx state for user
  isGetByUsernameWithGoogleAtLoginSuccess$ = this.store.select('user', 'isGetByUsernameWithGoogleAtLoginSuccess');
  userTakenByGmailWithGoogleAtLogin$ = this.store.select('user', 'userTakenByUsernameWithGoogleAtLogin');
  isCreateUserWithGoogleAtLoginSuccess$ = this.store.select('user', 'isCreateWithGoogleAtLoginSuccess');
  userLoginWithGoogle: User = <User>{};

  //ngrx state for candidate
  isGetCadidateWithGoogleAtLoginSuccess$ = this.store.select('candidate', 'isGetByUserWithGoogleAtLoginSuccess');
  candidateTakenByUserWithGoogleAtLogin$ = this.store.select('candidate', 'candidateTakenByUserWithGoogleAtLogin');





  constructor (
    private auth:Auth,
    private store: Store<{ auth: AuthState, user: UserState, candidate: candidateState}>,
    private router: Router
    ) {


      // kiểm tra login with google thành công hay chưa r gọi action getUserByGmailWithGoogleAtLogin
      this.isLoginWithGoogleSuccessfull$.subscribe((isSuccess) => {
        if (isSuccess) {
          console.log(this.userLoginWithGoogle);
          this.userFirebase$.subscribe(User=>{
            console.log(User);
            this.userLoginWithGoogle.Username = User.email ?? '';
            this.userLoginWithGoogle.Password = "1234";
            this.userLoginWithGoogle.Uid = User.uid;
          this.store.dispatch(UserActions.getUserByGmailWithGoogleAtLogin({Username: User.email}));
            
          })
        }
      });
      // Kiểm tra xem có user trong database k
      this.isGetByUsernameWithGoogleAtLoginSuccess$.subscribe((isSuccess) => {
        if (isSuccess) {
          this.userTakenByGmailWithGoogleAtLogin$.subscribe((user) => {
            if (user.Username == "404 user not found" ) {
              //không có user thì tạo user

              console.log(user);
              this.store.dispatch(UserActions.createWithGoogleAtLogin({user: this.userLoginWithGoogle}));      
              
            }
            else{
                 //có user thì kiểm tra user có profile chưa
                 console.log(user);
                 
              this.store.dispatch(CandidateActions.getByUserWithGoogleAtLogin({user: user._id}))
                 
            }
          });
        }
      });


      // kiểm tra tạo user thành công hay chưa r chuyển qua trang register
      this.isCreateUserWithGoogleAtLoginSuccess$.subscribe((isSuccess) => {
        if (isSuccess) {
          this.router.navigate(['/register']);
        }
      });

      // kiểm tra candidate nếu chưa có thì tạo, có r thì log vào home

          this.candidateTakenByUserWithGoogleAtLogin$.subscribe((candidate) => {
            if (candidate._id.length > 0) {
              if (candidate._id == "404 candidate not found") {
                this.router.navigate(['/register']);
              }
              else{
                this.router.navigate(['/home']);
              }
            }
          })


    }

  ngOnInit() {
    
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


