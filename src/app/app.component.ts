import {AfterViewInit, Component } from '@angular/core';
import { fadeAnimation } from "./fadeanimation";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements AfterViewInit{
  title = 'Freelancer - Theme Preview - startBootstrap';
  element: HTMLElement | null = document.body;

  ngAfterViewInit() {
    console.log("site view loaded");
  }


  getAnimationData(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }

  scroll(id: string) {
    this.element = document.querySelector(`#${id}`);
    this.element?.scrollIntoView();
  }
}
