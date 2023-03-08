import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, take } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-two',
  templateUrl: '../templates/two.component.html',
  styleUrls: ['../styles/two.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements OnInit, OnDestroy {

  clickCount$: Observable<number>;

  private _subscription = new Subscription();
  counter = 0;

  constructor(private service: ServiceService,
    private changeDetectorRef: ChangeDetectorRef) {
    this.clickCount$ = this.service.counterSubject$;
  }

  ngOnInit(): void {
    // this._subscription.add(
    //   this.service.counterSubject$.subscribe((value) => { 
    //     this.counter = value; 
    //     // this.changeDetectorRef.markForCheck();
    //   })
    // );
  }

  ngOnDestroy(): void {
    // this._subscription.unsubscribe();
  }

  logDetectChanges() {
    console.log('ComponentTwo has been checked');
    return true;
  }
}
