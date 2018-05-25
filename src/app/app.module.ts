import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CompanyComponent } from './company/company.component';
import { ComputerComponent } from './computer/computer.component';
import { CompanyService } from './company.service';
import { ComputerService } from './computer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { CompanyModule } from './company/company.module';
import { ComputerModule } from './computer/computer.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
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
    ReactiveFormsModule,
    RouterModule,
    CompanyModule,
    ComputerModule
  ],
  exports: [
  ],
  providers: [
    CompanyService,
    ComputerService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
