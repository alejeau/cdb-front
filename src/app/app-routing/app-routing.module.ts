import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from '../companies/companies.component';
import {AddCompanyComponent} from '../company/add-company/add-company.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'company/add',
    component: AddCompanyComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'company',
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
