import { Component } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.less'
})
export class PaymentComponent {

}
