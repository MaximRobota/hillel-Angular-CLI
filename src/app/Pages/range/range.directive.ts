import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[range]'
})
export class RangeDirective {
  _range: number[];

  @Input()
  set range( value ) {
    this.vcr.clear();
    this._range = this.generateRange(value[0], value[1]);

    this._range.forEach(num => {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: {
          num
        }
      });
    });
  }

  constructor( private vcr: ViewContainerRef, private tpl: TemplateRef<any> ) {}

  private generateRange( from, to ) {
    const arr: number[] = [];

    for (let i = from; i <= to; i++) {
      arr.push(i);
    }

    return arr;
  }

}
