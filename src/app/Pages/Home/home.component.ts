import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './http.component.html'
})
export class HomeComponent {
  title = 'app';

  search(e) {
    console.log(e);
  }
}
