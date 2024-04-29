import { RecruiterLayoutComponent } from './recruiter-layout.component';
import { Routes } from '@angular/router';

export const RECRUITERLAYOUT_ROUTERS: Routes = [
  {
    path: '',
    component: RecruiterLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'job-posting',
        loadChildren: () =>
          import('./job-posting/job-posting.routes').then((m) => m.JOBPOSTING_ROUTERS),
      },
      {
        path: 'job-detail',
        loadChildren: () =>
          import('./job-detail/job-detail.routes').then((m) => m.JOBDETAIL_ROUTERS),
      },
      {
        path:'choice-service',
        loadChildren: () =>
          import('./choice-service/choice-service.routes').then((m) => m.CHOICESERVICE_ROUTERS),
      },
      {
        path:'application-list',
        loadChildren: () =>
          import('./application-list/application-list.routes').then((m) => m.APPLICATIONLIST_ROUTERS),
      },
      {
        path:'login',
        loadChildren: () =>
          import('./login/login.routes').then((m) => m.LOGIN_ROUTERS),
      },
      {
        path:'register',
        loadChildren: () =>
          import('./register/register.routes').then((m) => m.REGISTER_ROUTERS),
      },
      {
        path:'create-company',
        loadChildren: () =>
          import('./create-company/create-company.routes').then((m) => m.CREATECOMPANY_ROUTERS),
      },
      {
        path:'basic-information',
        loadChildren: () =>
          import('./basic-information/basic-information.routes').then((m) => m.BASICINFORMATION_ROUTERS),
      }
    ],
  },

];