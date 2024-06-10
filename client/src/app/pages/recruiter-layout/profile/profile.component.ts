import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
  
  profileForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
  });

  companyForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Field: new FormControl('', Validators.required),
  });

  @ViewChild('userDialog', { static: true })
  userDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openUserDialog() {
    this.userDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeUserDialog() {
    this.userDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  @ViewChild('companyDialog', { static: true })
  companyDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);
  openCompanyDialog() {
    this.companyDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
  }
  closeCompanyDialog() {
    this.companyDialog.nativeElement.close();
    this.cdr2.detectChanges();
  }
}
