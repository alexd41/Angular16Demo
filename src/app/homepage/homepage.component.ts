import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <div class="contenty">
      <button (click)="({})">HomeComponent</button>
      <p>Home</p>
    
      <div class="components">
        <div class="one"> <app-one></app-one> </div>
        <div class="two"> <app-two></app-two> </div>
      </div>
    </div>
  `,
  styleUrls: ['./homepage.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
  logDetectChanges() {
    console.log('Homepage has been rendered');
    return true;
  }
}
