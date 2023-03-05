import { Component, signal } from '@angular/core';
import { SelectedTextMenuService } from './selected-text-menu/selected-text-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-16';

  constructor(private selectedTextMenuService: SelectedTextMenuService) {
  }
  
  openMenu(){
    this.selectedTextMenuService.showSelectedTextMenu.set(!!window.getSelection()?.toString());
    if(this.selectedTextMenuService.showSelectedTextMenu())
      this.selectedTextMenuService.lastSelectedText.set(window.getSelection()!.toString());
    window.getSelection()!.removeAllRanges();
  }
}
