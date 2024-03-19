import { Component, OnInit } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { Router,NavigationStart,RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TaigaModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent implements OnInit{
  selectedTab!: string; // Thuộc tính để lưu trữ tên của tab hiện đang được chọn
  activeItemIndex = 0;
  constructor (private router: Router) {
    if (this.router.url.includes('/home')) {
      this.activeItemIndex = 0;
    } else if (this.router.url.includes('/job')) {
      this.activeItemIndex = 1;
    } else if (this.router.url.includes('/company')) {
      this.activeItemIndex = 2;
    } else if (this.router.url.includes('/favorite')) {
      this.activeItemIndex = 3;
    } 
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (url === '/home') {
          this.activeItemIndex = 0;
        } else if (url.startsWith('/job')) {
          this.activeItemIndex = 1;
        } else if (url.startsWith('/company')) {
          this.activeItemIndex = 2;
        } else if (url.startsWith('/favorite')) {
          this.activeItemIndex = 3;
        } 
      }
    });
  }

  onTabClick(tabName: string) {
    this.selectedTab = tabName; 
    switch (tabName) {
      case 'home':
        this.router.navigate(['/']); 
        break;
      case 'job':
        this.router.navigate(['/job']); 
        break;
      case 'company':
        this.router.navigate(['/company']); 
        break;
      case 'favorite':
        this.router.navigate(['/favorites']); 
        break;
      default:
        console.warn('Invalid tab name:', tabName);
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

  register(){
    this.router.navigate(['/register']);
  }
}
