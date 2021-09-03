import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    SliderCardComponent

  ],
  imports: [
    CommonModule,
    SlickCarouselModule

  ],
  exports: [
    SliderCardComponent
  ]
})
export class LayoutsModule { }
