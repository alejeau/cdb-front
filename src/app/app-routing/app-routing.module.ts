import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyUpdateComponent } from '../company/company-update/company-update.component';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyAddComponent } from '../company/company-add/company-add.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompaniesComponent,
    pathMatch: 'full'
  },
  {
    path: 'company/update/:id',
    component: CompanyUpdateComponent,
    pathMatch: 'full'
  },
  {
    path: 'company/add',
    component: CompanyAddComponent,
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
