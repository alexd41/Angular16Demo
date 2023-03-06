import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.less'],
//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent {

  constructor(private service: ServiceService) { }

  get clickCount() {
    return this.service.counterSignal();
  }


  logDetectChanges() {
    console.log('ComponentOne has been rendered');
    return true;
  }
}
