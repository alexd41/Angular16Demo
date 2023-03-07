import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: '../templates/homepage.component.html',
  styleUrls: ['../styles/homepage.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
  logDetectChanges() {
    console.log('Homepage has been rendered');
    return true;
  }
}
