import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="tabs-home">
      <li *ngFor="let tab of tabs let i = index" (click)="selectTab(tab)" [class.active]="tab.active">
        <p>{{tab.title}}</p>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  constructor() {

  }
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    // activate the tab the user has clicked on.
    if (!!tab) {
      tab.active = true;
    }
  }
}
