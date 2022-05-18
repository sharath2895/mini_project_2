import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LeftNavComponent } from './dashboard/shared/left-nav/left-nav.component';
import { HeaderComponent } from './dashboard/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    LeftNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
