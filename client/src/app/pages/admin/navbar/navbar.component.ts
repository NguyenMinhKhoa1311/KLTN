import { Component,OnDestroy,OnInit } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { TaigaModule } from '../../../shared/taiga.module';
import { Admin } from '../../../models/admin.model';
import { Store } from '@ngrx/store';
import { AdminState } from '../../../ngrx/states/admin.state';
import { Subscription } from 'rxjs';
import * as AdminActions from '../../../ngrx/actions/admin.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShareModule, RouterLink, TaigaModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent implements OnDestroy {
  selectedTab!: string; // Thuộc tính để lưu trữ tên của tab hiện đang được chọn
  activeItemIndex = 0;

  subscriptions: Subscription[] = [];

  //variables
  isLogin = false;
  userLogged: Admin = <Admin>{};

  //ngrx of admin
  isLogin$ = this.store.select('admin', 'isLoginAtLogin');


  constructor (
    private router: Router,
    private store: Store<{ admin: AdminState}>
  ) {
    if (this.router.url.includes('/job-confirm')) {
      this.activeItemIndex = 0;
    } else if (this.router.url.includes('/candidate-management')) {
      this.activeItemIndex = 1;
    } else if (this.router.url.includes('/recruiter-management')) {
      this.activeItemIndex = 2;
    } else if (this.router.url.includes('/account-management')) {
      this.activeItemIndex = 3;
    } else if (this.router.url.includes('/choose-format')) {
      this.activeItemIndex = 4;
    }
    this.subscriptions.push(
      this.isLogin$.subscribe(isLogin => {
        if (isLogin) {
          let userLogged = sessionStorage.getItem('adminLogged');
          console.log('userOfRecruiterLogged',userLogged);
          
          if(userLogged){
            let userAfterParse = JSON.parse(userLogged);
            if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse!="null"&&userAfterParse!="undefined"&&userAfterParse?._id!=""){
              console.log('userOfRecruiterLogged',userLogged);
              this.isLogin = true;
              this.userLogged = userAfterParse;
              this.store.dispatch(AdminActions.resetIsLoginAtLogin());
            }
          }
        }
      })
    )
    
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
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
        } else if (url.startsWith('/choose-format')) {
          this.activeItemIndex = 4;
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
