import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `<div >
      <ng-content select=".header"></ng-content>
      <ng-content select=".content"></ng-content>
  </div>
  <button (click)="closeAlert()">Close</button>`

})
export class AlertContComponent {
    @Output() changeClick: EventEmitter<boolean> = new EventEmitter();
  showAlert = true;
  closeAlert() {
    this.changeClick.emit(this.showAlert);
  }
}
