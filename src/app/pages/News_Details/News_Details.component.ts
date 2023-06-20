import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, Injector, ViewEncapsulation} from '@angular/core';
import {CmsNewsService} from 'src/app/services/cms-news.service';
import {CmsNews} from 'src/app/Models/CmsNews';
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {ResponseResult} from "../../../base/models/response-result";

@Component({
  selector: 'app-News_Details',
  templateUrl: './News_Details.component.html',
  styleUrls: ['./News_Details.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class News_DetailsComponent implements OnInit {
  data!: CmsNews;

  constructor(
    private _route: ActivatedRoute,
    private _cmsNewsService: CmsNewsService
  ) {
    this._cmsNewsService.getDetail(Number(this._route.snapshot.paramMap.get('NewsId')))
    .then(Response => {
      this.data = Response?.data;
      console.log("news details", this.data);
    })
  }

  ngOnInit() {
    this._cmsNewsService.getDetail(Number(this._route.snapshot.paramMap.get('NewsId')))
      .then(Response => {
        this.data = Response?.data;
      })
    // this.data = this._route.paramMap.pipe(
    //   map(params => params.get("NewsId")),
    //   switchMap(NewsId =>
    //     this._cmsNewsService.getNewsDetail(NewsId)
    //   ));
    console.log(this.data);
    //console.log(this._route.snapshot.paramMap);

  }
}
