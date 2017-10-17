import { Component } from '@angular/core';
@Component({
  selector: 'app-main-tabs',
  templateUrl: './tabs.component.html'
})
export class MainTabsComponent {
  tabs = [];
  constructor() {
    this.tabs.push({
      name: 'Tab 1',
      _id: 1,
      active: true
    });
    this.tabs.push({
      name: 'Tab 2',
      _id: 2
    });
    this.tabs.push({
      name: 'Tab 3',
      _id: 3
    });
  }

}
