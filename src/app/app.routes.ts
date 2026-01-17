import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Leads } from './pages/leads/leads';
import { Reports } from './pages/reports/reports';     
import { Profile } from './pages/profile/profile';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  {
    path: 'dashboard',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'leads', component: Leads },
      { path: 'reports', component: Reports },
      { path: 'profile', component: Profile }
    ]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
