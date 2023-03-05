import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LhsService {

  public textToDisplay = signal('');
  public emboldenedText = computed(() => `<strong>${this.textToDisplay()}</strong>`);

}
