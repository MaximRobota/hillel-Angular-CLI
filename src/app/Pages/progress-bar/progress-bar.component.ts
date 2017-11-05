import {
  Component, Input, Output, OnChanges, OnDestroy,
  AfterViewInit, ViewChild, EventEmitter
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  styleUrls: ['./progress-bar.component.css'],
  template: `<div #container class="pb-container" [ngClass]="className">
    <div class="pb">
      <div class="pb-line" [style.width]="value + '%'"></div>
    </div>
    <div class="pb-status">{{value}}%</div>
  </div>`
})
export class ProgressBarComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('container') container;

  @Input('width') width = '200px';
  @Input('value') value = 0;
  @Input('className') className = 'custom-cls';

  @Output() startProgress = new EventEmitter();
  @Output() endProgress = new EventEmitter();

  ngAfterViewInit() {
    this.container.nativeElement.style.width = this.width;
  }

  ngOnChanges(changes) {
    if (changes.value.previousValue === 0 && changes.value.currentValue !== 0) {
      this.startProgress.emit();
    } else if (changes.value.currentValue === 100) {
      this.endProgress.emit();
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
