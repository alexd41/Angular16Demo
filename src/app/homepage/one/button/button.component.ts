import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <ng-container *ngIf="logDetectChanges()"></ng-container>
    <div class="content">
      <button (click)="({})">ButtonComponent</button>
      <p>ButtonComponent</p>
      <p><strong>Signal Counter</strong>: {{clickCount}}</p>
    </div>
  `, 
  styles: [` .content { display: flex; flex-direction: column; align-items: center; } `],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() clickCount: number = 0;
  
  logDetectChanges() {
    console.log('ButtonComponent has been rendered');
    return true;
  }
}
