import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <button (click)="({})">AppButton</button>
    <p>Button</p>
    <p><strong>Signal Counter</strong>: {{clickCount}}</p>
  `, 
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() clickCount: number = 0;
  
  logDetectChanges() {
    console.log('AppButton has been rendered');
    return true;
  }
}
