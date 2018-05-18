import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CompanyUpdateComponent } from './company-update/company-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    HeaderComponent,
    CompanyUpdateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CustomMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
