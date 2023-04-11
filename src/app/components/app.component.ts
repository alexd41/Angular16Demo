import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-16';
  private _observableCounter = 0;

  constructor(private service: ServiceService, private cdr: ChangeDetectorRef) { }

  observableCounter() {
    this._observableCounter++;
    this.service.counterSubject = this._observableCounter;
    this.cdr.detectChanges();
  }

  signalCounter() {
    console.log(this.service.counterSignal());
    this.service.counterSignal.update(n => n + 1);
    console.log(this.service.counterSignal());
    this.cdr.detectChanges();

  }

  showSignalTab = true;
  switchToCD() {
    this.showSignalTab = false;
  }

  switchToSignal() {
    this.showSignalTab = true;
  }

  logDetectChanges() {
    console.log('App Root has been checked');
    return true;
  }
}
