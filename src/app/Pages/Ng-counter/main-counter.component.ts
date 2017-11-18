import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'counter',
  template: `<button (click)="decrease()">-</button>
      <input  name="counter"  (input) = "onInput()" [(ngModel)] ="value" />
  <button (click)="increase()">+</button>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MainCounterComponent),
    multi: true
  }]
})
export class MainCounterComponent implements ControlValueAccessor {
  value: number;
  valueChange: (_: any) => {};
  writeValue(value: number) {
    this.value = value;
  }
  onInput() {
    this.valueChange(this.value);
  }
  registerOnChange(fn) {
    this.valueChange = fn;
  }
  registerOnTouched() {}
  increase() {
    this.value++;
    this.valueChange(this.value);
  }
  decrease(){
    this.value--;
    this.valueChange(this.value);
  }
}
