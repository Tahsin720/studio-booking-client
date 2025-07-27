import { Routes } from '@angular/router';
import { DashboardComponent } from '@features/dashboard/dashboard.component';

import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
];
