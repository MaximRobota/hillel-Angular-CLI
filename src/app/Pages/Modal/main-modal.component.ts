import { Component, ViewContainerRef, Injector,
  ComponentFactoryResolver, ViewChild, TemplateRef } from '@angular/core';

import {AlertModalComponent} from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './main-modal.component.html'
})
export class MainModalComponent {
  title = 'app';
  id = 0;
  alertRef;

  @ViewChild('alertTpl') alertTpl: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef,
              private _injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  createAlert() {
    const tplRef = this.alertTpl.createEmbeddedView({});
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(AlertModalComponent);
    this.alertRef = this.viewContainerRef
      .createComponent(componentFactory,
        0,
        undefined,
        [
          tplRef.rootNodes
        ]);

    this.alertRef.instance.header = `Header ${this.id}`;
    this.alertRef.instance.close.subscribe(this.onClose.bind(this));
    this.id++;
  }

  onClose() {
    this.alertRef.destroy();
  }
}
