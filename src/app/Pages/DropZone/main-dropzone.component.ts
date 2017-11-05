import {Component, ViewEncapsulation } from '@angular/core';


@Component({
  template: `<div>
    <h2>NumHighlight Directive</h2>
    <p numHighlight>
      I wanted to highlight some of the changes from Sublime Text -2 here, however it's surprisingly hard: virtually every aspect of the editor has been improved in some way, and even a list of the major changes would be too long. If you'd like to see the full list of changes, the team has made a dedicated page for them.

      Certainly there are big features that 3.0 has: Goto Definition, a new syntax highlighting engine, a new UI, and an expanded API. However the difference is frequently felt in the hundreds of improvements that don't warrant being featured on their own: spell checking works better, automatic indentation does the right thing more often, word wrapping handles source code better, high DPI screens are properly supported, and Goto Anything is smarter. There's too much to list, but combined the difference is night and day.

      One of the areas I'm especially proud of in Sublime Text 3 is performance: it's significantly faster than Sublime Text 2 along every axis. Startup is faster, opening files is faster, and scrolling is more efficient. While it's a much larger application than 2, it feels leaner.

      If you purchased your Sublime Text license from February 2013 onwards, then it's already valid for Sublime Text 3.0. If your license key is for Sublime Text 1 or 2, then you can purchase an upgrade.
    </p>
    <hr>
    <h2>Translate Directive</h2>

    <label *ngFor="let lang of langs">
      <input type="radio"
             name="langs"
             [checked]="lang === selectedLang" (click)="selectLang(lang)">
      {{lang}}
    </label>
    <br>
    <br>

    Greeting: <span [translate]="'hello'" [translateLang]="selectedLang"></span>
    <button [translate]="'approve'" [translateLang]="selectedLang"></button>
    <button [translate]="'edit'" [translateLang]="selectedLang"></button>
    <button [translate]="'cancel'" [translateLang]="selectedLang"></button>
    <button [translate]="'save'" [translateLang]="selectedLang"></button>
    <hr>
    <h2 draggable="true">Dropzone Directive</h2>
    <div dropzone>I'm dropzone container!</div>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropzoneComponent {
  langs = [
    'en',
    'fr',
    'de'
  ];
  selectedLang = 'en';

  selectLang(lang) {
    this.selectedLang = lang;
  }
}
