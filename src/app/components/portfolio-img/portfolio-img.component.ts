import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-portfolio-img]',
  templateUrl: './portfolio-img.component.html',
  styleUrls: ['./portfolio-img.component.scss']
})
export class PortfolioImgComponent implements OnInit {
  @Input() portfolioImg: any;
  @Output() modalId = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(id: string){
      this.modalId.emit(id);
  }
}
