import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
  aboutTitle!: string;

  aboutTextList = [
    {text: "Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.", margin: 'ms-auto'},
    {text: "You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!", margin: 'me-auto'}
  ]
  constructor() {
    this.aboutTitle = "about";
  }

}
