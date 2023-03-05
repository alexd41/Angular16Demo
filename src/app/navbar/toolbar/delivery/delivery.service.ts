import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor() { }
  private _fontBold: boolean = false;
  private fontBoldSubject = new BehaviorSubject<boolean>(this._fontBold);

  public fontBoldSignal = signal(false);

  public fontBoldSubject$(): Observable<boolean> {
    return this.fontBoldSubject.asObservable();
  }

  public toggleFontBold(): void {
    this._fontBold = !this._fontBold;
    this.fontBoldSubject.next(this._fontBold);
    this.fontBoldSignal.set(this._fontBold);
  }

}
