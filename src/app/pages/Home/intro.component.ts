import { Component, OnInit } from '@angular/core';
import { AboutUs } from 'src/app/enums/AboutUs.enum';
import { CmsNews } from 'src/app/Models/CmsNews';
import { CmsNewsService } from 'src/app/services/cms-news.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {
  _cmsNews:CmsNews|any;
  constructor(
    _cmsNewServices : CmsNewsService
  ) { 
    this._cmsNews = new CmsNews;
    _cmsNewServices.getDetail(AboutUs.About).then(Response=>{
      this._cmsNews = Response?.data;
    });

  }
  ngOnInit(): void {
    console.log("products init!");
  };
}
