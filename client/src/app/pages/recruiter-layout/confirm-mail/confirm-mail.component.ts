import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TokenResetPasswordState } from '../../../ngrx/states/token-reset-password.state';
import { TuiAlertService } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import * as TokenResetPasswordActions from '../../../ngrx/actions/token-reset-password.actions';
import { generateUuid } from '../../../../environments/environments';

@Component({
  selector: 'app-confirm-mail',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './confirm-mail.component.html',
  styleUrl: './confirm-mail.component.less'
})
export class ConfirmMailComponent {
  
  subscriptions: Subscription[] = [];
    //variables
    isCreateToken: boolean = false;
    isCreateTokenSuccess: boolean = false;

      //ngrx of token reset password
  tokenResetPassword$ = this.store.select('tokenResetPassword', 'tokenAtForgotPasswordOfRecruiter');


    constructor (
    private store: Store<{tokenResetPassword: TokenResetPasswordState}>,
    private router: Router,
    private readonly alerts: TuiAlertService,
    ) {
    this.subscriptions.push(
      this.tokenResetPassword$.subscribe((token) => {
        if(token._id != '500'&& this.isCreateToken){
          this.isCreateTokenSuccess = true;
        }
      }),
    )
    }
    mailForm = new FormGroup({
      email: new FormControl(''),
    });

    confirmMail(){
      console.log(this.mailForm.value.email);
      if (this.mailForm.value.email == '') {
        this.isCreateTokenSuccess = false;
        this.alerts
        .open('', {label: 'Vui lòng nhập email',status:'info'})
        .subscribe();
        return;
      }
      else{
        this.isCreateToken = true;
        this.isCreateTokenSuccess = true;
        const token = {
          TokenId: generateUuid(),
          User: this.mailForm.value.email,
        }
        this.store.dispatch(TokenResetPasswordActions.createTokenAtForgotPasswordOfRecruiter({tokenResetPassword:token}));
      }
    }

}
