import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';

export const ADMIN_ROUTERS: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'job-confirm',
        pathMatch: 'full',
      },
      {
        path: 'job-confirm',
        loadChildren: () =>
          import('./job-confirm/job-confirm.routes').then((m) => m.JOBCONFIRM_ROUTERS),
      },
      {
        path:'choose-format',
        loadChildren: () =>
          import('./choose-format/choose-format.routes').then((m) => m.CHOOSEFORMAT_ROUTERS),
      },
      {
        path:'candidate-management',
        loadChildren: () =>
          import('./candidate-management/candidate-management.routes').then((m) => m.CANDIDATEMANAGEMENT_ROUTERS),
      },
      {
        path:'recruiter-management',
        loadChildren: () =>
          import('./recruiter-management/recruiter-management.routes').then((m) => m.RECRUITERMANAGEMENT_ROUTERS),
      }
    ],
  },
];