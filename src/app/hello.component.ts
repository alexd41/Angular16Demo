import { Component, OnInit, computed, effect, signal, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'app-hello',
   template: `
    <div>Count: {{ counter() }}</div>
    <div>Odd: {{ isOdd() }}</div>
    <div>Is equal to 5: {{ isEqual() }}</div>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement()">Decrement</button>

    <div><strong>{{output()}}</strong></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppyComponent {
   counter = signal(0);
   isEqual = computed(() => this.counter() === 5);
   isOdd = computed(() => !!(this.counter() % 2));
   output = computed(() => "Count is " + this.counter());

   constructor(private cdr: ChangeDetectorRef) {
       effect(() => {
            if (this.isEqual()) {
                console.log('Counter value is equal 5!');
            }
       });
   }

   increment() {
      this.counter.update((value) => value + 1);
   }

   decrement() {
      this.counter.update((value) => value - 1);
   }

   reset() {
      this.counter.set(0);
   }
}