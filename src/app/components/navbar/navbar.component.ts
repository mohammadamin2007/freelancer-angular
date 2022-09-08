import {AfterViewInit, Component, EventEmitter, Output, Input} from '@angular/core';
import {ModalService} from "../../service/modal.service";
import {NavbarService} from "../../service/navbar.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  isCollapsed = true;
  @Output() scrollIntoContainer = new EventEmitter<string>;

  constructor(public modalService: ModalService, public navbarService: NavbarService) {}

  ngAfterViewInit() {
    console.log("navbar loaded");
  }

  scroll(id: string) {
    this.scrollIntoContainer.emit(id)
  }
}

