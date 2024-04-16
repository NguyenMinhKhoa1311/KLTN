import { PdfComponent } from './pdf.component';
import { Routes } from '@angular/router';

export const PDF_ROUTERS: Routes = [
  {
    path: '',
    component: PdfComponent,
    children: [
      {
        path: '',
        redirectTo: 'cv1',
        pathMatch: 'full',
      },
      {
        path:'cv1',
        loadChildren: () =>
          import('./component/cv1/cv1.routes').then((m) => m.CV1_ROUTERS),
      },
      {
        path:'cv2',
        loadChildren: () =>
          import('./component/cv2/cv2.routes').then((m) => m.CV2_ROUTERS),
      },
    ],
  },
];