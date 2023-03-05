import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedTextMenuService {
  public showSelectedTextMenu = signal(false);
  public lastSelectedText = signal('');
}
