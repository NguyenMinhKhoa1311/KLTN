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
];
