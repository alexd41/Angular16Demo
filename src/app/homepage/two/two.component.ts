import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements OnInit, OnDestroy {

  clickCount$: Observable<number>;

  private _subscription = new Subscription();
  private counter = 0;

  constructor(private service: ServiceService) {
    this.clickCount$ = this.service.counterSubject$;
  }

  ngOnInit(): void {
    this._subscription.add(
      this.service.counterSubject$.subscribe((value) => { 
        this.counter = value; 
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  logDetectChanges() {
    console.log('ComponentTwo has been rendered');
    return true;
  }
}
