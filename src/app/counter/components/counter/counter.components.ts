import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{ counter }}</h3>

      <button (click)="increment(2)">+1</button>
      <button (click)="decrement(2)">-1</button>
      <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {

  public counter: number = 0;
  constructor() { }

  increment( value: number ): number {
    return this.counter = this.counter + value;
  }

  decrement( value: number ): number {
    if (this.counter === 0) return 0;
    return this.counter -= value;
  }

  reset(): void {
    this.counter = 0;
  }

}
