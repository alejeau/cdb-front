import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppDashboardComponent} from "./app-dashboard/app-dashboard.component";
import {CompanyUpdateComponent} from "./company-update/company-update.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: AppDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'update',
    component: CompanyUpdateComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
