import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html'
})
export class OperationComponent implements OnInit {
  constructor() { }
  config: SwiperOptions = {
    slidesPerView: 6,
    slidesPerGroup:3,
    spaceBetween: 30,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints:{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40
      },
      '1024': {
        slidesPerView: 6,
        spaceBetween: 50
      }
    }
  };
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
  };
}