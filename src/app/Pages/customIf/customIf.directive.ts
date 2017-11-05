import {Directive, ViewContainerRef, TemplateRef,
  OnChanges, Input} from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective implements OnChanges {
  @Input() customIf: boolean;

  constructor(private _viewContainerRef: ViewContainerRef,
              private tpl: TemplateRef<any>) {}

  ngOnChanges() {
    this.resolveTpl();
  }

  resolveTpl() {
    if (this.customIf) {
      this._viewContainerRef.createEmbeddedView(this.tpl);
    } else {
      this._viewContainerRef.clear();
    }
  }
}
