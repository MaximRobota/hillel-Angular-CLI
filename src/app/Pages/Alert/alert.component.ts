import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-msg',
  template: `<app-alert [hidden] = 'hidden' (changeClick) = "changeClick($event)" >
      <div class="header" hightlite>Header Error</div>
      <p  class="content">You should check is on some of those fields below.</p>
  </app-alert>

  `

})
export class AlertComponent {
  hidden: boolean;

  @ViewChild('alertTpl') alertTpl: TemplateRef<any>;

  changeClick(e) {
    this.hidden = e;
  }

}
