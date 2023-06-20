import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { CmsNews, CmsNewsFind } from 'src/app/Models/CmsNews';
import { CmsNewsService } from 'src/app/services/cms-news.service';
import { NewsCategory } from 'src/app/enums/NewsCategory.enum';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  _model:CmsNewsFind|any = null;
  listProduct:any;
  constructor(
    private _cmsnewsService: CmsNewsService
  ){ 
    this._model = new CmsNewsFind;
    this._model.keyword = "";
    this._model.status = 1;
    this._model.pageIndex=1;
    this._model.pageSize = 6;
    this._model.orderCol = "PublishedDate";
    this._model.isDesc = true;
    this._model.idLanguage = 1;
    this._model.idCategory = NewsCategory.Product;
    this._cmsnewsService.find(this._model)
    .then(Response=>{
      this.listProduct = Response?.data;
      console.log("ListProduct");
      console.log(this.listProduct);
      console.log("End ListProduct");
    });

  }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints:{
      '240': {
        slidesPerView: 1,
        spaceBetween: 20
      },
      '640': {
        slidesPerView: 1,
        spaceBetween: 20
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40
      },
      '1024': {
        slidesPerView: 3,
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
