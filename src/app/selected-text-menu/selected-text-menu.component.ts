import { Component } from '@angular/core';
import { SelectedTextMenuService } from './selected-text-menu.service';
import { LhsService } from '../lhs/lhs.service';
import { RhsService } from '../rhs/rhs.service';

@Component({
  selector: 'app-selected-text-menu',
  templateUrl: './selected-text-menu.component.html',
  styleUrls: ['./selected-text-menu.component.less']
})
export class SelectedTextMenuComponent {

  constructor(public selectedTextMenuService: SelectedTextMenuService,
    public lhsService: LhsService,
    public rhsService: RhsService) {
  }

  public get showMenu(): boolean {
    return this.selectedTextMenuService.showSelectedTextMenu();
  }

  closeMenu() {
    this.selectedTextMenuService.showSelectedTextMenu.set(false);
  }

  sendToLhs() {
    this.lhsService.textToDisplay.set(this.selectedTextMenuService.lastSelectedText());
    this.closeMenu();
  }

  sendToBoth() {
    this.lhsService.textToDisplay.set(this.selectedTextMenuService.lastSelectedText());
    this.rhsService.setTextToDisplay(this.selectedTextMenuService.lastSelectedText());  
    this.closeMenu();
  }
}
