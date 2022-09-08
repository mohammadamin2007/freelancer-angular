import {AfterViewInit, Component} from '@angular/core';
import { ModalService } from "../../service/modal.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  portfolioTitle!: string;

  constructor(public modalService: ModalService) {
    this.portfolioTitle = "portfolio";
  }

  ngAfterViewInit() {
    console.log("portfolio loaded");
  }

}
