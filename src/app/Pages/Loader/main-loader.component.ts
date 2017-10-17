import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-loader',
  template: `<p>MainLoader</p>
  <app-loader [width] = "width"  [value]="count"></app-loader>
  <button (click)="startLoader()">Start</button>
  <button (click)="finishLoader()">Finish</button>
  `
})
export class MainLoaderComponent implements OnInit{
  // @Output() changeClick: EventEmitter<boolean> = new EventEmitter();
  width = 10;
  count = 0;
  timer: any;
  startLoader() {
    this.finishLoader();
    this.timer = setInterval( () => {
      if (this.count > 98) {
        clearInterval(this.timer);
      }
      this.count++;
    }, 25);
  }
  finishLoader(){
    this.count = 0;
    clearInterval(this.timer);
  }
  ngOnInit() {
    this.startLoader();
    console.log('Start');
  }
}
