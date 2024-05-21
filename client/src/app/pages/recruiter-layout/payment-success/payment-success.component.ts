import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.less'
})
export class PaymentSuccessComponent {

}
