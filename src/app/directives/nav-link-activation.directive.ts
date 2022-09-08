import {AfterViewInit, Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { NavLinkService } from "../service/nav-link-service.service";
import { NavbarService } from "../service/navbar.service";

@Directive({
  selector: '[scrollEffects]'
})
export class NavLinkActivationDirective implements OnInit, AfterViewInit{
  windowInnerHeight!: number;

  constructor(private el: ElementRef, private navLinkService: NavLinkService, private navbarService: NavbarService) {  }

  ngOnInit() {
    window.onscroll = () => {
      for(let i = 0; i < this.el.nativeElement.children.length; i++){
        if(this.el.nativeElement.children.item(i).getBoundingClientRect().top < 19) {
          this.navLinkService.activeNavbarLink(this.el.nativeElement.children.item(i).children[0].id)
        }
        if(window.scrollY < this.windowInnerHeight) {
          this.navLinkService.resetNavbar();
        }
      }
      this.navbarService.shrinkNavbar = window.scrollY > 4;
    }
  }

  ngAfterViewInit() {
    this.windowInnerHeight = window.innerHeight;
  }
}
