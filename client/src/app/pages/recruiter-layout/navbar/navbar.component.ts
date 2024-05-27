import { Component, OnInit } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { TaigaModule } from '../../../shared/taiga.module';
import { Recruiter } from '../../../models/recruiter.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShareModule, RouterLink, TaigaModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent implements OnInit{

  selectedTab!: string; // Thuộc tính để lưu trữ tên của tab hiện đang được chọn
  activeItemIndex = 0;

  //variables
  isLogin = false;
  userLogged: Recruiter = <Recruiter>{};


  constructor (
    private router: Router,
  ) {
    if (this.router.url.includes('/choice-service')) {
      this.activeItemIndex = 0;
    } else if (this.router.url.includes('/job-detail')) {
      this.activeItemIndex = 1;
    } else if (this.router.url.includes('/application-list')) {
      this.activeItemIndex = 2;
    } 

  }

  ngOnInit(): void {
    console.log('navigation');
    let userLogged = sessionStorage.getItem('recruiterLoged');
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
        if (url === '/choice-service') {
          this.activeItemIndex = 0;
        } else if (url.startsWith('/job-detail')) {
          this.activeItemIndex = 1;
        } else if (url.startsWith('/application-list')) {
          this.activeItemIndex = 2;
        } 
      }
    });
  }

  onTabClick(tabName: string) {
    this.selectedTab = tabName; 
    switch (tabName) {
      case 'choice-service':
        this.router.navigate(['/recruiterLayout/choice-service']); 
        break;
      case 'job-detail':
        this.router.navigate(['/recruiterLayout/job-detail']); 
        break;
      case 'application-list':
        this.router.navigate(['/recruiterLayout/application-list']); 
        break;
      default:
        console.warn('Invalid tab name:', tabName);
    }
  }

  navigateToHone(){
    this.router.navigate(['/home']);
  }
  navigateToLogin(){
    this.router.navigate(['/recruiterLayout/login']);
  }
  navigateToRegister(){
    this.router.navigate(['/recruiterLayout/register']);
  }
}
