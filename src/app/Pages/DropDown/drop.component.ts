import { Component,  Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
@Component({
  selector: 'app-drop',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({width: 120, transform: 'translateX(0)', opacity: 0})),
      state('active', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('inactive => active', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('active => inactive', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class DropComponent {
  lists = [
    {   name: 'Google',
      link: 'http://google.com'
    },
    {   name: 'Google2',
      link: 'http://google.com'
    },
    {   name: 'Google3',
      link: 'http://google.com'
    },
    {   name: 'Google4',
      link: 'http://google.com'
    },
    {   name: 'Google5',
      link: 'http://google.com'
    }
  ];
  state = 'inactive';
  constructor() { }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
