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
      }
    ],
  },
];