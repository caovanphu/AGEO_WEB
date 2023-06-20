import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-operation-intro',
  templateUrl: './operation_intro.component.html'
})
export class OperationIntroComponent implements OnInit {
  constructor() { }
  config: SwiperOptions = {
    slidesPerView: 3,
    slidesPerGroup:3,
    spaceBetween: 30,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false
    }
  };
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
  };
}