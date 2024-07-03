import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthState } from '../../../ngrx/states/auth.state';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import { UserState } from '../../../ngrx/states/user.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthAcitons from '../../../ngrx/actions/auth.actions';
import * as UserActions from '../../../ngrx/actions/user.actions';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { AdminState } from '../../../ngrx/states/admin.state';
import { TuiAlertService } from '@taiga-ui/core';
import * as AdminActions from '../../../ngrx/actions/admin.actions';
import { generateUuid } from '../../../../environments/environments';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent implements OnDestroy{

  subscriptions: Subscription[] = [];


    //variables
    userLoged:any = {
      Username: '',
      Password: '',
      Uid: '',
      _id:''
    };
    //ngrx of auth
    tokenTakenAtRegisterOfAdmin$ = this.store.select('auth', 'tokenAtRegisterOfAdmin');

    //ngrx of user
    userTakenByGmail$ = this.store.select('user','userTakenByGmailOfAdminAtRegister')
    userCreatedOfAdmin$ = this.store.select('user','userCreatedOfAdminAtRegister')
    userTakenByUsernameOfAdminWithAccount$ = this.store.select('user','userTakenByGmailOfAdminWithAccountAtRegister')

  
    //ngrx of admin
    adminTakenByUser$ = this.store.select('admin','adminGetByUserAtRegister')
    adminCreated$ = this.store.select('admin','admincreatedAtRegister')

  constructor(
    private store: Store<{ auth: AuthState, user: UserState, admin: AdminState}>,
    private router: Router,
    private readonly alerts: TuiAlertService,
  ) { 
    this.subscriptions.push(
      this.userCreatedOfAdmin$.subscribe((user) => {
        if (user._id) {
          if (user._id.length >0) {
            console.log('user', user);
            const newAdmin: any= {
              User: user._id,
              AdminId: generateUuid(),
              Name: this.adminRegisterForm.value.Name,
              Phone: this.adminRegisterForm.value.Phone,
              Address: this.adminRegisterForm.value.Address,
              Avatar:"https://storage.googleapis.com/storagedoan.appspot.com/images/CloneAvatar/c6139be4-6e0a-4e5b-8fcd-ff75466607fb-avatar-trang-4.jpg?GoogleAccessId=firebase-adminsdk-8r86k%40storagedoan.iam.gserviceaccount.com&Expires=4162813200&Signature=vQgsNuWiC8gGsB6uky3ucxyRhILtcvRvEW6K8NDEaKD1iEkHHFD7hIMkhqrS9aDYGO7rHRvFCOjJcHZihO8smr0opYETm4HZEKoCPi1HqxRRT9XhE9fnOcDluw4NByUhi5XXsWp0YMibEvjhsLOd0hn9ZPvqT%2BdIvhgWl6lilCuLcrr9EW%2Ff4KkhP0SGY%2FN%2BjwcY7cyQZDNQc9ExqY1l2%2BXpknRuaiyzZr6wnmpBncZx7UBvBVEtrCEToVWKs3IXGZEXUiFYFIis07d0d4IzOFoqnBIMyRB7H41B6XTEse3PtWL1lBfEtIRN1vw%2FRAz2D5RuPvruynG%2FfcytoHzW4w%3D%3D",
              StatusConfirm: true,
            }
            console.log('admin', newAdmin);
            this.store.dispatch(AdminActions.createAtRegister({ admin: newAdmin }));
          }
        }
      }),
      this.adminTakenByUser$.subscribe((admin) => {
        if (admin._id) {
          if (admin._id !='500') {
            this.alerts
            .open('', {label: 'Tài khoản đã tồn tại',status:'info'})
            .subscribe();
          }else{
            /// bug có thể ở đây
            const newAdmin: any= {
              User: this.userLoged._id,
              AdminId: generateUuid(),
              Name: this.adminRegisterForm.value.Name,
              Phone: this.adminRegisterForm.value.Phone,
              Address: this.adminRegisterForm.value.Address,
              Avatar:"https://storage.googleapis.com/storagedoan.appspot.com/images/CloneAvatar/c6139be4-6e0a-4e5b-8fcd-ff75466607fb-avatar-trang-4.jpg?GoogleAccessId=firebase-adminsdk-8r86k%40storagedoan.iam.gserviceaccount.com&Expires=4162813200&Signature=vQgsNuWiC8gGsB6uky3ucxyRhILtcvRvEW6K8NDEaKD1iEkHHFD7hIMkhqrS9aDYGO7rHRvFCOjJcHZihO8smr0opYETm4HZEKoCPi1HqxRRT9XhE9fnOcDluw4NByUhi5XXsWp0YMibEvjhsLOd0hn9ZPvqT%2BdIvhgWl6lilCuLcrr9EW%2Ff4KkhP0SGY%2FN%2BjwcY7cyQZDNQc9ExqY1l2%2BXpknRuaiyzZr6wnmpBncZx7UBvBVEtrCEToVWKs3IXGZEXUiFYFIis07d0d4IzOFoqnBIMyRB7H41B6XTEse3PtWL1lBfEtIRN1vw%2FRAz2D5RuPvruynG%2FfcytoHzW4w%3D%3D",
              StatusConfirm: true,
            }
            console.log('admin', newAdmin);
            this.store.dispatch(AdminActions.createAtRegister({ admin: newAdmin }));
          }
        }
      }),
      this.userTakenByUsernameOfAdminWithAccount$.subscribe((user) => {
        if (user._id) {
          if (user._id != "404 user not found") {
            console.log('user', user);
            this.userLoged._id = user._id;
            console.log('user at have user');
            this.store.dispatch(AdminActions.getByUserAtRegister({ user: user._id }));
          }else{
            let userToCreate:any = {
              Username: this.adminRegisterForm.value.Email??'',
              Password: this.adminRegisterForm.value.Password??'',
              Uid: generateUuid()
            }
            this.store.dispatch(UserActions.createAtRegisterOfAdmin({ user: userToCreate }))
          }
        }
      }),
      this.adminCreated$.subscribe((admin) => {
        if (admin._id) {
          if (admin._id != '500') {
            this.alerts
            .open('', {label: 'Tạo tài khoản Admin thành công',status:'success'})
            .subscribe();
          }else{
            this.alerts
            .open('', {label: 'Tạo tài khoản Admin thất bại',status:'error'})
            .subscribe();
          
          }
        }
      })

    )
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  adminRegisterForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
  });
  registerWithAccount(): void {
    if(this.adminRegisterForm.value.Password !== this.adminRegisterForm.value.ConfirmPassword){
      alert('Password and Confirm Password are not the same');
      return;
    }
    this.store.dispatch(UserActions.getByGmailOfAdminWithAccountAtRegister({ username: this.adminRegisterForm.value.Email??"" }));
  }
}

