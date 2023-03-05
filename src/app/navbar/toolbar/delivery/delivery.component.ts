import { Component } from '@angular/core';
import { DeliveryService } from './delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.less']
})
export class DeliveryComponent {

  constructor(private deliveryService: DeliveryService) { }

  toggleFontBold() {
    this.deliveryService.toggleFontBold();
  }

}
