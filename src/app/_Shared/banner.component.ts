import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
import { CmsProjectService } from '../services/cms-project.service';
import { CmsProjectFind, CmsProject } from '../Models/CmsProject';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, EffectCube, Pagination } from "swiper";
SwiperCore.use([Autoplay, EffectCube, Pagination]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Marker for the top of Mt. Ranier
  summit = marker([20.97770922295292, 105.78935075254981], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  }).bindPopup('<font style="color:#00A859">Công ty Cổ Phần AGEO</font><br>Trụ sở chính');
  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'AGEO': this.summit
    }
  };
  zoom = 20;
  center = latLng([20.97770922295292, 105.78935075254981])
  options = {
    layers: [this.streetMaps, this.summit],
    zoom: 15,
    center: this.center

  };
  _model:CmsProjectFind|any;
  listProject: any;
  constructor(
    private _cmsProjectService: CmsProjectService
  ) {
    this._model = new CmsProjectFind;
    this._model.keyword = "";
    this._model.status = 1;
    this._model.pageIndex = 1;
    this._model.pageSize = 6;
    this._model.orderCol = "";
    this._model.isDesc = true;
    this._model.idLanguage = 1;
    this._cmsProjectService.find(this._model)
    .then(Response=>{
      this.listProject = Response?.data;
      console.log("CmsProjectFind");
      console.log(this.listProject);
      console.log("/CmsProjectFind");
    });
  }

  ngOnInit(): void {
  }
  doApply(){
    this.center = latLng(20.9612561108373, 105.80475041241151);
    this.zoom = 20;

  }
}
