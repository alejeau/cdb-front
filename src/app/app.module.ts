import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CompanyService } from "./company.service";
import { CompaniesComponent } from './companies/companies.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {CompanyModule} from "./company/company.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CustomMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CompanyModule
  ],
  exports: [
    CompaniesComponent
  ],
  providers: [CompanyService],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
