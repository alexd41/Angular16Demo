import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <button (click)="({})">AppButton</button>
    <p>Button</p>
  `
})
export class ButtonComponent {
  logDetectChanges() {
    console.log('AppButton has been rendered');
    return true;
  }
}
