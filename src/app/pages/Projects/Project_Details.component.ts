import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, Injector, ViewEncapsulation} from '@angular/core';
import {CmsNewsService} from 'src/app/services/cms-news.service';
import {CmsNews} from 'src/app/Models/CmsNews';
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {ResponseResult} from "../../../base/models/response-result";
import { CmsProject } from 'src/app/Models/CmsProject';
import { CmsProjectService } from 'src/app/services/cms-project.service';

@Component({
  selector: 'app-Project_Details',
  templateUrl: './Project_Details.component.html',
  styleUrls: ['./Project_Details.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Project_DetailsComponent implements OnInit {
  data!: CmsProject;

  constructor(
    private _route: ActivatedRoute,
    private _cmsProjectService: CmsProjectService
  ) {
    this._cmsProjectService.getDetail(Number(this._route.snapshot.paramMap.get('ProjectId')))
    .then(Response => {
      this.data = Response?.data;
      console.log("project", this.data)
    })
  }

  ngOnInit() {

    // this.data = this._route.paramMap.pipe(
    //   map(params => params.get("ProjectId")),
    //   switchMap(NewsId =>
    //     this._cmsProjectService.getNewsDetail(NewsId)
    //   ));
    console.log(this.data);
    //console.log(this._route.snapshot.paramMap);
  }
}
