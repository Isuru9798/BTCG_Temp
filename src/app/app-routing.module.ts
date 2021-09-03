import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminSigninComponent } from './authentication/components/admin-signin/admin-signin.component';
import { SigninComponent } from './authentication/components/signin/signin.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('./front/front.module').then(m => m.FrontModule),
      }
    ]
   },
  {
    path: 'authentication/signin',
    component: SigninComponent
   },
  {
    path: 'authentication/admin',
    component: AdminSigninComponent
   },
   {
    path: 'authentication/signup',
    component: SignupComponent
   },

  {
    path: 'dashboard',
    component: AdminComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  }, 
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
