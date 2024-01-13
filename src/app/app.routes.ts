import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MainTempPageComponent } from './main-temp-page/main-temp-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainTempPageComponent,
  },
  {
    path: 'register',
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule,
  },
];
