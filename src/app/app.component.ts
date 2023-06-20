import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('@.disabled')
  title = 'Công ty Cổ phần AGEO';
  public animationsDisabled = false;

  onActivate() {
    $('.js-mb-menu, .js-mb-filter').removeClass('is-show');
    $('body').removeClass('no-scroll');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
