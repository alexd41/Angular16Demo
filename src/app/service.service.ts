import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ServiceService {

  // SIGNAL ZONE

  public counterSignal = signal(0);

  // OBSERVABLE ZONE

  private _counterSubject = new BehaviorSubject<number>(0);

  public get counterSubject$() {
    return this._counterSubject.asObservable();
  }

  public set counterSubject(value: number) {
    this._counterSubject.next(value);
  }
}
