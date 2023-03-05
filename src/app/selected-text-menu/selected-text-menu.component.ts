import { Component } from '@angular/core';
import { SelectedTextMenuService } from './selected-text-menu.service';

@Component({
  selector: 'app-selected-text-menu',
  templateUrl: './selected-text-menu.component.html',
  styleUrls: ['./selected-text-menu.component.less']
})
export class SelectedTextMenuComponent {

  constructor(public selectedTextMenuService: SelectedTextMenuService) {
  }

  public get showMenu(): boolean {
    return this.selectedTextMenuService.showSelectedTextMenu();
  }

  closeMenu() {
    this.selectedTextMenuService.showSelectedTextMenu.set(false);
  }
}
