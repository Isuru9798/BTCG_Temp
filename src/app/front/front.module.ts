import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.routing';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    SlickCarouselModule,
    FontAwesomeModule,
    LayoutsModule
    
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class FrontModule { }
