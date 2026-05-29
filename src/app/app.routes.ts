import { Routes } from '@angular/router';
import { PaisesDetailPage } from './features/paises/pages/paises-detail-page/paises-detail-page';

export const routes: Routes = [
  {
    path: '',
  },
  { path: 'pais/:name', component: PaisesDetailPage },
];
