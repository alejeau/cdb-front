import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from '../companies/companies.component';
import {AddCompanyComponent} from '../add-company/add-company.component';

const routes: Routes = [
  {
    path: 'cdb-company',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'cdb-company/add',
    component: AddCompanyComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'cdb-company',
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
