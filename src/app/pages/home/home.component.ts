import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  copyRightText!: string;

  constructor() {
    this.copyRightText = "copyright © your website 2022"
  }

}
