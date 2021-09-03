import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss','../../../layouts/front-layout/front-layout.component.scss']
})
export class HomeComponent implements OnInit {

   @ViewChild('slickModal') slickModal: SlickCarouselComponent;
   @ViewChild('newsModel') newsModel: SlickCarouselComponent;

   // slides = [
   //    { img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg" },
   //    { img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg" },
   //    { img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg" },
   //    { img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg" },
   //    { img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg" },
   //    { img: "https://img.youtube.com/vi/h4x5BvWmh4s/hqdefault.jpg" }
   // ];
   slides = [
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" },
      { img: "https://www.aljazeera.com/wp-content/uploads/2021/06/bitcoin.jpg?resize=1200%2C630" }
   ];

   newsSlides = [
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" },
      { img: "https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/07/Witness-Largest-Single-Day-Rise-Bitcoin-Hit-US39K-for-E-commerce-Giant.jpg" }
   ];

   // slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
   slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
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

   slickInit(e) { }
   breakpoint(e) { }
   afterChange(e) { }
   beforeChange(e) { }
}
