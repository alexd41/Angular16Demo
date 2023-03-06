import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-16';

  logDetectChanges() {
    console.log('App Root has been rendered');
    return true;
  }
}
