import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <button (click)="({})">ComponentOne</button>
    <p>Component One</p>
    <div class="content">
      <app-button></app-button>
    </div>
 `,
 styleUrls: ['./one.component.less']
})
export class OneComponent {
  logDetectChanges() {
    console.log('ComponentOne has been rendered');
    return true;
  }
}
