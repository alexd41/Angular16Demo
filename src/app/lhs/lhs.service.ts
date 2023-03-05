import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LhsService {

  public textToDisplay = signal('Left');
}
