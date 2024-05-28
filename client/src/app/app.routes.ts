import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () =>
            import('./pages/layout/layout.routes').then((m) => m.LAYOUT_ROUTERS),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.routes').then((m) => m.LOGIN_ROUTERS),
    },
    {
        path: 'register',
        loadChildren: () =>
          import('./pages/register/register.routes').then((m) => m.REGISTER_ROUTERS),
    },  
    {
        path: 'createProfile',
        loadChildren: () =>
          import('./pages/createProfile/create-profile.routes').then((m) => m.CREATEPROFILE_ROUTERS),
    }, 
    {
        path: 'recruiterLayout',
        loadChildren: () =>
          import('./pages/recruiter-layout/recruiter-layout.routes').then((m) => m.RECRUITERLAYOUT_ROUTERS),
    },
    {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin/admin.routes').then((m) => m.ADMIN_ROUTERS),
    },
    {
        path: 'forgot-pass',
        loadChildren: () =>
          import('./pages/forgot-pass/forgot-pass.routes').then((m) => m.FORGOTPASS_ROUTERS),
    }
];
