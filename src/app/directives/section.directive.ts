import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appSection]'
})
export class SectionDirective implements OnInit{

  constructor(public el: ElementRef) { }
  ngOnInit() {
    document.styleSheets[0].insertRule(`#${this.el.nativeElement.id}{
      padding-top: 6rem;
      padding-bottom: 6rem;
    }`, document.styleSheets[0].cssRules.length-1);
  }
}
