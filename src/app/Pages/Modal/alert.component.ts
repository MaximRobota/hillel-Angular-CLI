import {Component, EventEmitter, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-alert-modal',
  styleUrls: ['./alert.component.css'],
  template: `<div class="alert" @appearence>
    <div class="alert-header">
      <div class="alert-header-text" highlight>{{header}}</div>
      <a href="javascript:void(0);" class="close" (click)="onClose()"></a>
    </div>
    <div class="alert-content">
      <ng-content></ng-content>
    </div>
  </div>
  <div class="overlay"></div>`,
  animations: [
    trigger('appearence', [
      state('void', style({
        top: '-50%'
      })),
      state('*', style({
        top: '10%',
        boxShadow: '0px 15px 40px 0px rgba(0,0,0,0.25)'
      })),
      transition('void => *',
        animate('700ms 0ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')
      )
    ])
  ]
})
export class AlertModalComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();

  header = 'Header';

  onClose() {
    this.close.emit();
  }
}
