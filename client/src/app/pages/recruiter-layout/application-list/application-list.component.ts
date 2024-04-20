import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.less'
})
export class ApplicationListComponent {

  @ViewChild('detailDialog', { static: true })
  detailDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openDetailDialog() {
    this.detailDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeDetailDialog() {
    this.detailDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }
}
