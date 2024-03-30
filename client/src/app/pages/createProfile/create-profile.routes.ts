import { CreateProfileComponent } from './create-profile.component';
import { Routes } from '@angular/router';

export const CREATEPROFILE_ROUTERS: Routes = [
  {
    path: '',
    component: CreateProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal-information',
        pathMatch: 'full',
      },
      {
        path: 'personal-information',
        loadChildren: () =>
          import('./personal-information/personal-information.routes').then((m) => m.PERSONALINFORMATION_ROUTERS),
      },
      {
        path: 'basic-information',
        loadChildren: () =>
          import('./basic-information/basic-information.routes').then((m) => m.BASICINFORMATION_ROUTERS),
      },
      {
        path: 'create-success',
        loadChildren: () =>
          import('./create-success/create-success.routes').then((m) => m.CREATESUCCESS_ROUTERS),
      },
    ],
  },

];