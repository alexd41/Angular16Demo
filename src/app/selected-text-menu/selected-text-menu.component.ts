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
    window.getSelection()?.removeAllRanges();
  }

  sendToLhs(): void {
    this.lhsService.textToDisplay.set(this.selectedTextMenuService.lastSelectedText());
    this.closeMenu();
  }

  sendToRhs(): void {
    this.rhsService.setTextToDisplay(this.selectedTextMenuService.lastSelectedText());
    this.closeMenu();
  }

  sendToBoth(): void {
    this.lhsService.textToDisplay.set(this.selectedTextMenuService.lastSelectedText());
    this.rhsService.setTextToDisplay(this.selectedTextMenuService.lastSelectedText());  
    this.closeMenu();
  }

  highlightYellow(): void {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

    const highlightElement = document.createElement('span');
    highlightElement.classList.add('highlight');
    highlightElement.style.backgroundColor = 'yellow';

    range?.surroundContents(highlightElement);
    const clearButton = document.createElement('mat-icon');
    clearButton.innerHTML = 'clear'; // mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color
    clearButton.classList.add('material-icons');
    clearButton.style.cursor = 'pointer';
    clearButton.addEventListener('click', () => {
      highlightElement.outerHTML = highlightElement.innerHTML;
    });
    highlightElement.appendChild(clearButton);
    this.closeMenu();
    }

    removeHighlight() {

    }
}
