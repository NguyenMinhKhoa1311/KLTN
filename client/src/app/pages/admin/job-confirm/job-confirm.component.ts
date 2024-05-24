import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-job-confirm',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './job-confirm.component.html',
  styleUrl: './job-confirm.component.less'
})
export class JobConfirmComponent {

}
