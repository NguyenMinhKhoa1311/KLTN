import { Component } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';
import * as AuthAcitons from '../../ngrx/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/states/auth.state';
import { Router } from '@angular/router';
import { UserFirebase } from '../../models/userFirebase.model';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginWithGoogle = false;
  userFirebase: UserFirebase = <UserFirebase>{};
  userFirebase$ = this.store.select('auth', 'userFirebase');

  constructor (private auth:Auth,
    private store: Store<{ auth: AuthState}>,
    private router: Router) {
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
    
  loginWithGoogle() {
    this.isLoginWithGoogle = true;
    this.store.dispatch(AuthAcitons.login());
  }
}
