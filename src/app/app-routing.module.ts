import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CompanyUpdateComponent} from "./company-update/company-update.component";
import {CompaniesComponent} from "./companies/companies.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'update/:id',
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
