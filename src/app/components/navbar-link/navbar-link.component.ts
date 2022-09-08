import {Component, EventEmitter, Output} from '@angular/core';
import { NavLinkService } from "../../service/nav-link-service.service";

@Component({
  selector: '[app-navbar-link]',
  template: `
    <li *ngFor="let navLinkItem of navLinkService.navbarItems" class="nav-item mx-0 mx-lg-1">
      <a [routerLink]="navLinkItem.link" [routerLinkActive]="[navLinkItem.text == 'contact'? 'active-nav-link': '']" [ngClass]="{'active-nav-link': navLinkService.active == navLinkItem.text}" class="nav-link fw-bold py-3 px-lg-3 rounded" (click)="toggleCollapse(navLinkItem.text !== 'contact'?navLinkItem.text: 'contact')">{{ navLinkItem.text }}</a>
    </li>
  `,
  styleUrls: ['./navbar-link.component.scss']
})
export class NavbarLinkComponent {
  @Output() toggleCo = new EventEmitter<boolean>;
  @Output() scrollIntoContainer = new EventEmitter<string>;

  constructor(public navLinkService: NavLinkService) { }

  toggleCollapse(id: string) {
    if(window.innerWidth < 992) {
      this.toggleCo.emit(true);
    } else {
      this.toggleCo.emit(false);
    }
    if(id !== "contact"){
      this.scrollIntoContainer.emit(id);
    }
  }
}
