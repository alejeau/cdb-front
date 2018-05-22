import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyUpdateComponent} from "../company-update/company-update.component";
import {AppDashboardComponent} from "../app-dashboard/app-dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomMaterialModule} from "../custom-material/custom-material.module";

@NgModule({
  declarations: [
    AppDashboardComponent,
    CompanyUpdateComponent
  ],

  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    AppDashboardComponent,
    CompanyUpdateComponent
  ]
})
export class CompanyModule { }
