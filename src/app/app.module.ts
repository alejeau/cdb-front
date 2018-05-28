import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,  MatFormField,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import { CompanyComponent } from './company/company.component';
import { ComputerComponent } from './computer/computer.component';
import { CompanyService } from './company.service';
import { ComputerService } from './computer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { CompanyModule } from './company/company.module';
import { ComputerModule } from './computer/computer.module';
import { IndexComponent } from './index/index.component';
import {TokenInterceptor} from '../token-interceptor';
import {AppLoginComponent} from './login/app-login.component';
import {AppLogoutComponent} from './logout/app-logout.component';

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
    RoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CompanyModule,
    ComputerModule
  ],
  exports: [
    FormsModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
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
