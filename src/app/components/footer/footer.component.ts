import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialIcons = [
    {
      icon: "facebook-f"
    },
    {
      icon: "twitter"
    },
    {
      icon: "linkedin"
    },
    {
      icon: "dribbble"
    },
  ]
  footerTexts = [
    "location",
    "around the web",
    "about freelancer"
  ]

  constructor() { }

}
