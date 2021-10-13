import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetemployeeComponent } from './components/getemployee/getemployee.component';
import { LoginComponent } from './components/login/login.component';
import { MngsubscriptionComponent } from './components/mngsubscription/mngsubscription.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthenticationGuard } from './authentication.guard'
const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: "employee", pathMatch: 'full' },
      { path: 'employee', component: GetemployeeComponent },
      { path: 'subscription', component: MngsubscriptionComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
