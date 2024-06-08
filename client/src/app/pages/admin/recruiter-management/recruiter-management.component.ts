import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-recruiter-management',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './recruiter-management.component.html',
  styleUrl: './recruiter-management.component.less'
})
export class RecruiterManagementComponent {
  @ViewChild('recruiterDialog', { static: true })
  recruiterDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openRecruiterDialog() {
    this.recruiterDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeRecruiterDialog() {
    this.recruiterDialog.nativeElement.close();
    this.cdr1.detectChanges();
    
  }
}
