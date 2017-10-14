import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';


@Directive({
    selector: '[hightlite]'

})
export class HightDirective {
    @HostBinding('style.color') color = 'red';
    @HostListener('mouseover') onMouseOver(){
        this.elementRef.nativeElement.style.fontWeight = '700';
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.elementRef.nativeElement.style.fontWeight = '400';
    }
    constructor(private elementRef: ElementRef) {
    }
}