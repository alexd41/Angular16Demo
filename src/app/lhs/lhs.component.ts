import { Component } from '@angular/core';
import { LhsService } from './lhs.service';
import { DeliveryService } from '../navbar/toolbar/delivery/delivery.service';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.less']
})
export class LhsComponent {
  constructor(private lhsService: LhsService, private deliveryService: DeliveryService) {
  }

  public get textBold(): boolean {
    return this.deliveryService.fontBoldSignal();
  }

  public get textToDisplay(): string {
    return this.lhsService.textToDisplay();
  }

  public get emboldenedText(): string {
    return this.lhsService.emboldenedText();
  }
}
