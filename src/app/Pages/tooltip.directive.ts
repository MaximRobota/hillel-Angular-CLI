import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[tooltip]'
})
export class ToolTipDirective implements OnInit {
    private _tooltipEl: HTMLElement;
    @Input('text') text: string;
    @HostBinding('style.color') color = 'red';
    @HostListener('mouseover', ['$event']) onMouseOver(e) {
        const {top, left, width} = e.target.getBoundingClientRect();
        const x = left + width, y = top;
        this._tooltipEl = document.createElement('div');
        this._tooltipEl.classList.add('tooltipCl');
        this._tooltipEl.innerHTML = this.text;
        this._tooltipEl.style.top = `${y}px`;
        this._tooltipEl.style.left = `${x}px`;
        document.body.appendChild(this._tooltipEl);

    }
    @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
        this._tooltipEl.remove();
    }

    constructor(private elementRef: ElementRef) {
    }
    ngOnInit(){

    }
}