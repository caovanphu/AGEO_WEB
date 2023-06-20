import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-navleft',
  templateUrl: './about-navleft.component.html'
})
export class AboutNavleftComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

}
