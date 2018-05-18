import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import {AuthGuard} from './auth-guard.service';
import {AppLoginComponent} from './app-login/app-login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component : AppLoginComponent,
    pathMatch: 'full'
  },
  {
    path : '**',
    component : AppDashboardComponent,
    pathMatch : 'full',
    canActivate : [AuthGuard],
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
