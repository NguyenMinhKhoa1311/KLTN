import { RecruiterLayoutComponent } from './recruiter-layout.component';
import { Routes } from '@angular/router';

export const RECRUITERLAYOUT_ROUTERS: Routes = [
  {
    path: '',
    component: RecruiterLayoutComponent,
    children: [
    //   {
    //     path: '',
    //     redirectTo: 'personal-information',
    //     pathMatch: 'full',
    //   },
      {
        path: 'job-posting',
        loadChildren: () =>
          import('./job-posting/job-posting.routes').then((m) => m.JOBPOSTING_ROUTERS),
      }
      
    ],
  },

];