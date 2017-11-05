import {Directive, HostListener, ElementRef,
  Input, OnInit, Renderer2, Renderer} from '@angular/core';

@Directive({
  selector: '[myTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('myTooltip') myTooltip: string;

  private _tooltipEl: HTMLElement;

  @HostListener('mouseover', ['$event']) onMouseOver(e) {
    const {top, left, width} = e.target.getBoundingClientRect();
    const x = left + width;
    const y = top;

    this._tooltipEl = document.createElement('div');
    this._tooltipEl.classList.add('tooltip-wrapper');
    this._tooltipEl.innerHTML = this.myTooltip;
    this._tooltipEl.style.top = `${y}px`;
    this._tooltipEl.style.left = `${x}px`;

    document.body.appendChild(this._tooltipEl);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._tooltipEl.remove();
  }

  constructor(private elemRef: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.myTooltip);
  }
}
