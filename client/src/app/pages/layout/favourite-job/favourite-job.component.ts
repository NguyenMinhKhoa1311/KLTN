import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-favourite-job',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './favourite-job.component.html',
  styleUrl: './favourite-job.component.less'
})
export class FavouriteJobComponent {
  constructor() {}
}
