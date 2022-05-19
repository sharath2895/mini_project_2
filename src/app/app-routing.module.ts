import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { LoginComponent } from './authentication/authentication/login/login.component';
import { RegisterComponent } from './authentication/authentication/register/register.component';

const routes: Routes = [

  {
    path: '',
    component: AuthenticationComponent,
    
  },
  // {
  //   path: '', component: LoginComponent
  // },
  // {
  //   path: '', component: RegisterComponent
  // },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./authentication/authentication/authentication.module').then(m => m.AuthenticationModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
