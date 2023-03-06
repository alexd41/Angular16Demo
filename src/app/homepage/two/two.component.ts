import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <button (click)="({})">ComponentTwo</button>
    <p>Component Two</p>
  `
})
export class TwoComponent {
  logDetectChanges() {
    console.log('ComponentTwo has been rendered');
    return true;
  }
}
