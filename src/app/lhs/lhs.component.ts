import { Component } from '@angular/core';
import { LhsService } from './lhs.service';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.less']
})
export class LhsComponent {
  constructor(private lhsService: LhsService) {
  }

  public get textToDisplay(): string {
    return this.lhsService.textToDisplay();
  }
}
