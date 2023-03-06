import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <p>Component Two</p>
    <button (click)="({})">ComponentTwo</button>
  `
})
export class TwoComponent {
  logDetectChanges() {
    console.log('ComponentTwo has been rendered');
    return true;
  }
}
