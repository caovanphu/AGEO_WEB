import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NewsCategory } from '../enums/NewsCategory.enum';
import { CmsCategory } from '../Models/CmsCategory';
import { CategoriesService } from '../services/cms-category.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() menuBar:any;
  constructor(
    private _categoryService: CategoriesService
  ) {
    console.log("constructor");
    console.log("Header:");
    this.menuBar = JSON.stringify({label:"Home"});
    this._categoryService.getTreeByIdParent(NewsCategory.Menu, 1, false).then(Response=>{
      this.menuBar = Response?.data[0];
      console.log("<Header>", this.menuBar, "</header>");
    });
    this._categoryService.getTreeTableByIdParent(NewsCategory.Menu, false, false)
      .then(Response => {
        console.log(Response?.data);
        this.getMenu(Response?.data);
      });
    console.log("/header:");
  }
  private getMenu(treeData: any) {
    var strReturn: string = "";
    var prevLevel: number = -1;
    var prevElement: CmsCategory;
    var i: number;
    prevElement = new CmsCategory;
    treeData.forEach((element: CmsCategory) => {
      if (prevLevel !== -1) {
        if (prevLevel < element.level) {
          strReturn += `<li><a class='nav-link'>${prevElement.title}<i class="fa fa-angle-down"aria-hidden="true"></i></a>
            <ul class="sub-menu">
          `
        } else if (prevLevel > element.level) {
          for (i = element.level; i < prevLevel; i++) {
            strReturn += "</ul></li>"
          }
        } else {
          strReturn += `<li><a href="${prevElement.imgUrl}" class="nav-link">${prevElement.title}</a></li>`;
        }
      }
      prevElement = element;
      prevLevel = element.level;
    });
    if (prevLevel < prevElement.level) {
      strReturn += `<li><a class='nav-link'>${prevElement.title}<i class="fa fa-angle-down"aria-hidden="true"></i></a>
        <ul class="sub-menu">
      `
    } else if (prevLevel > prevElement.level) {
      for (i = prevElement.level; i < prevLevel; i++) {
        strReturn += "</ul></li>"
      }
    } else {
      strReturn += `<li><a href="${prevElement.imgUrl}" class="nav-link">${prevElement.title}</a></li>`;
    }
    console.log(strReturn);
    return strReturn;
  }
  ngOnInit(): void { 
    console.log("OnInit");
  }
}
