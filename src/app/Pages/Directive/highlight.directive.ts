import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[highlightColor]' })

export class HighlightDirective   {
  @Input() highlightColor: string;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
