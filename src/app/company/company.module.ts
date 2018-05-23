import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyUpdateComponent} from "../company-update/company-update.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {CompaniesComponent} from "../companies/companies.component";
import {CompanyComponent} from "./company.component";

@NgModule({
  declarations: [
    CompanyComponent,
    CompaniesComponent,
    CompanyUpdateComponent
  ],

  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    CompanyUpdateComponent
  ]
})
export class CompanyModule { }
