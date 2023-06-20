import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3500,
    smartSpeed: 1000,
    margin: 40,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    responsive:{
        0:{
            items:2,
        },
        400:{
            items:3,
        },
        600:{
            items:5,
        },
        1000:{
            items:8,
        },
        1200:{
          items:10,
        },
        1920 : {
            items: 10
        }
    }
  }
  ngOnInit(): void {
  }

}
