import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-success',
  standalone: true,
  imports: [],
  templateUrl: './create-success.component.html',
  styleUrl: './create-success.component.less'
})
export class CreateSuccessComponent {
  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
