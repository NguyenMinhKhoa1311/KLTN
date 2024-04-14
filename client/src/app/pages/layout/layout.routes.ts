import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTERS: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
          {
            path: 'home',
            loadChildren: () =>
              import('./home/home.routes').then((m) => m.HOME_ROUTERS),
          },
          {
            path:'profile',
            loadChildren: () =>
              import('./profile/profile.routes').then((m) => m.PROFILE_ROUTERS),
          },
          {
            path:'job',
            loadChildren: () =>
              import('./job/job.routes').then((m) => m.JOB_ROUTERS),
          },
          {
            path:'company',
            loadChildren: () =>
              import('./company/company.routes').then((m) => m.COMPANY_ROUTERS),
          },
          {
            path:'bestjob',
            loadChildren: () =>
              import('./bestjob/bestjob.routes').then((m) => m.BESTJOB_ROUTERS),
          },
          {
            path:'pdf',
            loadChildren: () =>
              import('./pdf/pdf.routes').then((m) => m.PDF_ROUTERS),
          },
          {
            path:'company-detail',
            loadChildren: () =>
              import('./company-detail/company-detail.routes').then((m) => m.COMPANYDETAIL_ROUTERS),
          },
          {
            path:'job-detail',
            loadChildren: () =>
              import('./job-detail/job-detail.routes').then((m) => m.JOBDETAIL_ROUTERS),
          }
    ],
  },
];