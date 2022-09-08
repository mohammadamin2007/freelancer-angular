import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalOpened!: boolean;
  portfolioImagesList = [
    {
      src: "assets/cabin.png",
      id: "cabin",
      opened: false,
      show: false,
      alt: "cabin",
      title: "log cabin"
    },
    {
      src: "assets/cake.png",
      id: "cake",
      opened: false,
      show: false,
      alt: "cake",
      title: "tasty cake",
    },
    {
      src: "assets/circus.png",
      id: "circus",
      opened: false,
      show: false,
      alt: "circus",
      title: "circus tent",
    },
    {
      src: "assets/game.png",
      id: "game",
      opened: false,
      show: false,
      alt: "controller"
    },
    {
      src: "assets/safe.png",
      id: "safe",
      opened: false,
      show: false,
      alt: "safe",
      title: "locked safe",
    },
    {
      src: "assets/submarine.png",
      id: "submarine",
      opened: false,
      show: false,
      alt: "submarine",
      title: "submarine",
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  openModal(id: string) {
    this.portfolioImagesList = this.portfolioImagesList.map(item => {
      let e;
      if (item.id == id) {
        item.opened = true;
        e = new Promise(() => {
          setTimeout(() => {
            item.show = true;
            this.modalOpened = true;
            this.document.body.classList.add("overflow-hidden");
            this.document.body.style.paddingRight = "16px";
          }, 200)
        });
        return item
      } else {
        return item
      }
    });
  }

  closeModal(id: string) {
    this.portfolioImagesList = this.portfolioImagesList.map(item => {
      let e;
      if (item.id == id) {
        item.show = false;
        e = new Promise(() => {
          setTimeout(() => {
            item.opened = false;
            this.modalOpened = false;
            this.document.body.classList.remove("overflow-hidden");
            this.document.body.style.paddingRight = "";
          }, 300)
        });
        return item
      } else {
        return item
      }
    });
  }
}
