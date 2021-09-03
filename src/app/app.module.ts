import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { FrontModule } from './front/front.module';
import { AdminComponent } from './layouts/admin/admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FrontLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontModule,
    AuthenticationModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
