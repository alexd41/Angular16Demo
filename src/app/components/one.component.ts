import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-one',
  templateUrl: '../templates/one.component.html',
  styleUrls: ['../styles/one.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent {

  constructor(protected service: ServiceService, private cdr: ChangeDetectorRef) { }

  something(){
    this.cdr.detectChanges();
  }

  anotherThing(){
    this.cdr.markForCheck();
  }

  logDetectChanges() {
    console.log('ComponentOne has been checked');
    return true;
  }
}
