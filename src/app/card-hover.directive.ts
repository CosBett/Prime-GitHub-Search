import { Directive, ElementRef, HostListener, } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('null');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }

}
