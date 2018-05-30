import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyUpdateComponent } from '../company/company-update/company-update.component';
import { CompanyAddComponent } from '../company/company-add/company-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyComponent } from './company.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyUpdateComponent,
    CompanyAddComponent,
    CompaniesComponent,
  ],

  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports: [
    CompanyComponent,
    CompaniesComponent,
    CompanyAddComponent,
    CompanyUpdateComponent,
  ]
})
export class CompanyModule { }
