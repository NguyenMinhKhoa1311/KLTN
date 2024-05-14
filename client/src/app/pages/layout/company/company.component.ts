import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.less'
})
export class CompanyComponent {

  index_item=0;
}
