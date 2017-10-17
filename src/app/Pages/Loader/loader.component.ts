import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnChanges{
@Input('value') value: number;
@Input('width') width: number;
  ngOnChanges() {

  }
}
