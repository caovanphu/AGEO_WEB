import { Component, OnInit, Injector } from '@angular/core';
import { NewsCategory } from 'src/app/enums/NewsCategory.enum';
import { CmsNews, CmsNewsFind } from 'src/app/Models/CmsNews';
import { CmsNewsService } from 'src/app/services/cms-news.service';
@Component({
  selector: 'app-hotNews',
  templateUrl: './hotNews.component.html'
})
export class HotNewsComponent implements OnInit {
  _model:CmsNewsFind|any = null;
  topNew:CmsNews|any = null;
  listNew:any;
  constructor(
    private _cmsnewsService: CmsNewsService
  ) {
    this.topNew = new CmsNews;
    this._model = new CmsNewsFind;
    this._model.keyword = "";
    this._model.status = 1;
    this._model.pageIndex=1;
    this._model.pageSize = 6;
    this._model.orderCol = "PublishedDate";
    this._model.isDesc = true;
    this._model.idLanguage = 1;
    this._model.idCategory = NewsCategory.News;
    this._cmsnewsService.find(this._model)
    .then(Response=>{
      this.listNew = Response?.data;
      this.topNew = this.listNew.shift();
      this.topNew.imageUrl = this.topNew.imageUrl==null?"":this.topNew.imageUrl;
      console.log(Response?.data);
    });
  }

  ngOnInit() {
  }

}
