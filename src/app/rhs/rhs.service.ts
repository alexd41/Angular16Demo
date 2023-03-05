import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RhsService {
  public textToDisplay = new BehaviorSubject<string>('');
  public emboldenedText = new BehaviorSubject<string>('');

  public textToDisplay$(): Observable<string> {
    return this.textToDisplay.asObservable();
  }
  public emboldenedText$(): Observable<string> {
    return this.emboldenedText.asObservable();
  }

  public setTextToDisplay(text: string): void {
    this.textToDisplay.next(text);
    this.emboldenedText.next(`<strong>${text}</strong>`);
  }
}
