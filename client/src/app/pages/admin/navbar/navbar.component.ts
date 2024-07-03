import { Component,OnInit } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { TaigaModule } from '../../../shared/taiga.module';
import { Admin } from '../../../models/admin.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShareModule, RouterLink, TaigaModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  selectedTab!: string; // Thuộc tính để lưu trữ tên của tab hiện đang được chọn
  activeItemIndex = 0;

  //variables
  isLogin = false;
  userLogged: Admin = <Admin>{};


  constructor (
    private router: Router,
  ) {
    if (this.router.url.includes('/job-confirm')) {
      this.activeItemIndex = 0;
    } else if (this.router.url.includes('/candidate-management')) {
      this.activeItemIndex = 1;
    } else if (this.router.url.includes('/recruiter-management')) {
      this.activeItemIndex = 2;
    } else if (this.router.url.includes('/account-management')) {
      this.activeItemIndex = 3;
    } 

  }

  ngOnInit(): void {
    console.log('navigation');
    let userLogged = sessionStorage.getItem('adminLogged');
    console.log('userOfRecruiterLogged',userLogged);
    
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged);
      if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse!="null"&&userAfterParse!="undefined"&&userAfterParse?._id!=""){
        console.log('userOfRecruiterLogged',userLogged);
        this.isLogin = true;
        this.userLogged = userAfterParse;
      }
    }

    this.router.events.subscribe((event) => {
      ('navigation')
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (url === '/job-confirm') {
          this.activeItemIndex = 0;
        } else if (url.startsWith('/candidate-management')) {
          this.activeItemIndex = 1;
        } else if (url.startsWith('/recruiter-management')) {
          this.activeItemIndex = 2;
        }  else if (url.startsWith('/account-management')) {
          this.activeItemIndex = 3;
        } 
      }
    });
  }

  onTabClick(tabName: string) {
    this.selectedTab = tabName; 
    switch (tabName) {
      case 'job-confirm':
        this.router.navigate(['/admin/job-confirm']); 
        break;
      case 'candidate-management':
        this.router.navigate(['/admin/candidate-management']); 
        break;
      case 'recruiter-management':
        this.router.navigate(['/admin/recruiter-management']); 
        break;
      case 'account-management':
        this.router.navigate(['/admin/account-management']); 
        break;
      default:
        console.warn('Invalid tab name:', tabName);
    }
  }

  
  navigateToLogin(){
    this.router.navigate(['/admin/login']);
  }
  navigateToRegister(){
    this.router.navigate(['/admin/register']);
  }

}
