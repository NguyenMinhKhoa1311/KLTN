import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TaigaModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  constructor (private router: Router) {}

  onTabClick(tabName: string) {
    switch (tabName) {
      case 'home':
        this.router.navigate(['/']); // Navigate to home route
        break;
      case 'job':
        this.router.navigate(['/job']); // Navigate to jobs route
        break;
      case 'company':
        this.router.navigate(['/company']); // Navigate to companies route
        break;
      case 'favorite':
        this.router.navigate(['/favorites']); // Navigate to favorites route
        break;
      default:
        console.warn('Invalid tab name:', tabName);
    }
  }
}
