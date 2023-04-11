import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-button',
  templateUrl: '../templates/button.component.html', 
  styles: [` .contento { display: flex; flex-direction: column; align-items: center; } `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() clickCountBtn: number = 0;

  constructor(protected service: ServiceService) {}

  logDetectChanges() {
    console.log('ButtonComponent has been checked');
    return true;
  }
}
