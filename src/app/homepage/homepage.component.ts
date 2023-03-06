import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <button (click)="({})">HomeComponent</button>
    <p> Home</p>
    <div class="content">
      <div class="one"> <app-one></app-one> </div>
      <div class="two"> <app-two></app-two> </div>
    </div>
  `,
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent {
  logDetectChanges() {
    console.log('Homepage has been rendered');
    return true;
  }
}
