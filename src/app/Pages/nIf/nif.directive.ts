import {Directive, ViewContainerRef, TemplateRef,
  Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[revertIf]'
})
export class RevertifDirective implements OnChanges {
  @Input('revertIf') revertIf: boolean;

  constructor(private _vcr: ViewContainerRef,
              private tpl: TemplateRef<any>) {}

  ngOnChanges() {
    if (this.revertIf) {
      this._vcr.clear();
    } else {
      this._vcr.createEmbeddedView(this.tpl);
    }
  }
}
