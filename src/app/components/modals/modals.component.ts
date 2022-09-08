import { Component } from '@angular/core';
import { ModalService } from "../../service/modal.service";

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent {

  constructor(public modalService: ModalService) { }

}
