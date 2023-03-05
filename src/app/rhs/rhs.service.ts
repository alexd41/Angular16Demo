import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RhsService {
  public textToDisplay = new BehaviorSubject<string>('Right');

  public textToDisplay$(): Observable<string> {
    return this.textToDisplay.asObservable();
  }

  public setTextToDisplay(text: string): void {
    this.textToDisplay.next(text);
  }
}
