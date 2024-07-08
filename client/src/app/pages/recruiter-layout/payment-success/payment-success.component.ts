import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.less'
})
export class PaymentSuccessComponent {

  constructor(private router: Router) { }

  navigateHome(){
    this.router.navigate(['/recruiterLayout/job-detail']);
  }

}
