import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: '../templates/button.component.html', 
  styles: [` .contento { display: flex; flex-direction: column; align-items: center; } `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() clickCountBtn: number = 0;
  
  logDetectChanges() {
    console.log('ButtonComponent has been checked');
    return true;
  }
}
