import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-16';
  private _observableCounter = 0;
  private _signalCounter = 0;

  constructor(private service: ServiceService) { }

  observableCounter() {
    this._observableCounter++;
    this.service.counterSubject = this._observableCounter;
  }

  signalCounter() {
    this._signalCounter++;
    this.service.counterSignal.set(this._signalCounter);
  }

  showSignalTab = false;
  switchToCD() {
    this.showSignalTab = false;
  }

  switchToSignal() {
    this.showSignalTab = true;
  }

  logDetectChanges() {
    console.log('App Root has been rendered');
    return true;
  }
}
