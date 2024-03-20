import { Component, Inject, OnInit } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';
import * as AuthAcitons from '../../ngrx/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/states/auth.state';
import { Router } from '@angular/router';
import { UserFirebase } from '../../models/userFirebase.model';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit {
  isLoginWithGoogle = false;
  userFirebase: UserFirebase = <UserFirebase>{};
  userFirebase$ = this.store.select('auth', 'userFirebase');

  constructor (
    private auth:Auth,
    private store: Store<{ auth: AuthState}>,
    private router: Router
    ) {
      onAuthStateChanged(this.auth, (user) => {
        console.log(user);
        
        if (user && user.email != undefined && user.email!="") {
          this.isLoginWithGoogle = true;
          this.userFirebase = {
            uid: user.uid,
            email: user.email || '',
            name: user.displayName || '',
            picture: user.photoURL || '',
          };
          //this.store.dispatch(UserActions.getByEmail({ email: user.email||"" }));
        }
      });
    }

  ngOnInit() {
    
  }

  loginWithGoogle() {
    this.isLoginWithGoogle = true;
    this.store.dispatch(AuthAcitons.login());
  }

  register() {
    this.router.navigate(['/register']);
  }
}


