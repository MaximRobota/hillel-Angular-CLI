import {Component, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-bar',
  templateUrl: './main-progress-bar.component.html'
})
export class MainProgressBarComponent implements AfterViewInit{
  value = 0;
  value1 = 0;
  messages = [];
  checked = true;

  ngAfterViewInit() {
    const timer = setInterval(() => {
      if (this.value < 100) {
        this.value++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    const timer2 = setInterval(() => {
      if (this.value1 < 100) {
        this.value1++;
      } else {
        clearInterval(timer2);
      }
    }, 50);
  }

  onStart() {
    this.messages.push('Start progress!');
  }

  onFinish() {
    this.messages.push('Finish progress!');
  }
}
