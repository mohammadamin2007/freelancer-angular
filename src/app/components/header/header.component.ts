import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  headerTitle!: string;
  headerDescription!: string;

  constructor() {
    this.headerTitle = "start bootstrap";
    this.headerDescription = "graphic artist - web designer - illustrator"
  }

  ngAfterViewInit() {
    console.log("header loaded");
  }
}
