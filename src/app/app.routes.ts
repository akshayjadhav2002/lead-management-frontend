import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Leads } from './pages/leads/leads';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'leads', component: Leads },
  { path: 'reports', component: Reports },
  // { path: 'profile', component: Settings },
  { path: 'profile', component: Profile } 
];
