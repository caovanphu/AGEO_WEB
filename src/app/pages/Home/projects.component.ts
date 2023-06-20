import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { CmsProjectService } from '../../services/cms-project.service';
import { CmsProjectFind, CmsProject } from '../../Models/CmsProject';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  _model:CmsProjectFind|any;
  topProject: CmsProject|any;
  listProject: any;
  constructor(
    private _cmsProjectService: CmsProjectService
  ) { 
    this._model = new CmsProjectFind;
    this.topProject = new CmsProject;
    this._model.keyword = "";
    this._model.status = 1;
    this._model.pageIndex = 1;
    this._model.pageSize = 5;
    this._model.orderCol = "";
    this._model.isDesc = true;
    this._model.idLanguage = 1;
    this._cmsProjectService.find(this._model)
    .then(Response=>{
      console.log("<project>", Response?.data, "</project>");
      this.listProject = Response?.data;
      this.topProject = this.listProject.shift();
    });
  }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
    console.log("projects init!");
  };
}
