import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[highlightColor]' })

export class HighlightDirective implements OnInit {
  @Input() highlightColor: string;
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    this.highlight('yellow');

  }
  private highlight(color: string) {
    console.log();
    let num = parseInt(this.el.nativeElement.innerHTML.replace(/\D+/g,""));
    let text = this.el.nativeElement.innerHTML.replace(/\d/g, '');
    this.el.nativeElement.style.backgroundColor = color;
    var div = document.createElement('div');
    div.innerHTML = text + "<strong> " + num + "</strong>";
    document.body.appendChild(div);
  }
}
