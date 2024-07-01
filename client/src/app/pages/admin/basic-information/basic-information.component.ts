import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminState } from '../../../ngrx/states/admin.state';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/states/auth.state';
import { generateUuid } from '../../../../environments/environments';
import * as AdminActions from '../../../ngrx/actions/admin.actions';
import * as AuthActions from '../../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.less'
})
export class BasicInformationComponent implements OnDestroy {
  
  subscriptions: Subscription[] = [];

    //variables
    user: any ={}

  //ngrx of admin
  adminCreated$ = this.store.select('admin','admincreatedAtRegister')

  //ngrx of auth
  tokenTakenAtRegisterOfAdmin$ = this.store.select('auth', 'tokenAtRegisterOfAdmin');

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  constructor(
    private store: Store<{ admin: AdminState , auth: AuthState}>,
    private router: Router
  ) {
    const userAsJson = sessionStorage.getItem('userOfAdmin');
    console.log(userAsJson);
    if(userAsJson){
      this.user = JSON.parse(userAsJson || '');
      console.log(this.user);
    }
    this.subscriptions.push(
      this.adminCreated$.subscribe((admin) => {
        if(admin._id){
          if(admin._id!='500'){
            console.log(localStorage.length);
            console.log('admin', admin);
            
            
            sessionStorage.setItem('adminLogged', JSON.stringify(admin));
            const userToGetToken : any = {
              username: this.user.Username,
              password: this.user.Password
            }
            this.store.dispatch(AuthActions.getTokenAtRegisterOfAdmin({user: userToGetToken}));
          }
        }
      }),
      this.tokenTakenAtRegisterOfAdmin$.subscribe((token) => {
        if(token.token){
          console.log('token', token.token);
          
          sessionStorage.setItem('tokenOfAdmin', token.token);
          this.router.navigate(['admin/job-confirm']);
        }
      })
    );
  }


  adminRegisterForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
  });
  registerAdmin(): void {
    const newAdmin: any= {
      User: this.user._id,
      AdminId: generateUuid(),
      Name: this.adminRegisterForm.value.Name,
      Phone: this.adminRegisterForm.value.Phone,
      Address: this.adminRegisterForm.value.Address,
      StatusConfirm: false,
    }
    console.log('admin', newAdmin);
    this.store.dispatch(AdminActions.createAtRegister({ admin: newAdmin }));
  }



}
