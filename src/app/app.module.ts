import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
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
import { TokenInterceptor } from '../token-interceptor';
import { AppLoginComponent } from './login/app-login.component';
import { AppLogoutComponent } from './logout/app-logout.component';


class UIErrorHandler extends ErrorHandler {
  constructor() { super(); }
  handleError(error) {
    super.handleError(error);
    console.log(`Error occurred:${error.message}`);
    throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AppLoginComponent,
    AppLogoutComponent,
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
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: UIErrorHandler
    },
    CompanyService,
    ComputerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
