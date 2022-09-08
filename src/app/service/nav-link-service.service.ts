import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavLinkService {
  active!:string;
  navbarItems = [
    {
      text:"portfolio",
      link: "",
    },
    {
      text:"about",
      link: "",
    },
    {
      text: "contact",
      link: "contact",
    }
  ];

  constructor() { }

  activeNavbarLink(id: string) {
    this.active = id;
  }

  resetNavbar() {
    this.active = "";
  }
}
