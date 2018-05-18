import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomMaterialModule} from "./custom-material/custom-material.module";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyDashComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
