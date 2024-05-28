import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-management',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.less'
})
export class AccountManagementComponent {
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
