import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../../../app.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slides = [
    {img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg"},
    {img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg"},
    {img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg"},
    {img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg"},
    {img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg"},
    {img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg"}
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
       {
          breakpoint: 992,
          settings: {
             arrows: false,
             slidesToShow: 2,
             slidesToScroll: 1
          }
       },
       {
          breakpoint: 768,
          settings: {
             arrows: false,
             slidesToShow: 2,
             slidesToScroll: 2
          }
       },
       {
          breakpoint: 480,
          settings: {
             arrows: false,
             slidesToShow: 1,
             slidesToScroll: 1
          }
       }
    ]
 };

  constructor() { }

  ngOnInit() {
  }

}
