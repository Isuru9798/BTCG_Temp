import { Component, Input, OnInit, Output } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';


@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  slideConfigHeader: any;
  @Input() dataPass;

  fullWidthSlider = [
    { img: "https://embryo.theironnetwork.org/assets/images/slider-3.jpg" },
    { img: "https://embryo.theironnetwork.org/assets/images/slider-2.jpg" },
    { img: "https://embryo.theironnetwork.org/assets/images/slider-1.jpg" }
 ];
  constructor() { }

  ngOnInit() {
    
  }

}