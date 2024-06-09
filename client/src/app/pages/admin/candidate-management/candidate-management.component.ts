import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-candidate-management',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './candidate-management.component.html',
  styleUrl: './candidate-management.component.less'
})
export class CandidateManagementComponent {

  @ViewChild('candidateDialog', { static: true })
  candidateDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openCandidateDialog() {
    this.candidateDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeCandidateDialog() {
    this.candidateDialog.nativeElement.close();
    this.cdr1.detectChanges();
    
  }
}
