import { Component, OnDestroy, OnInit } from '@angular/core';
import { RhsService } from './rhs.service';
import { Subscription } from 'rxjs';
import { DeliveryService } from '../navbar/toolbar/delivery/delivery.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.less']
})
export class RhsComponent implements OnInit, OnDestroy {
  public textToDisplay!: string;
  public emboldenedText!: string;
  public subscriptions: Subscription = new Subscription();
  public textBold!: boolean;

  constructor(private rhsService: RhsService, private deliveryService: DeliveryService) {
  }
  
  ngOnInit(): void {
    this.subscriptions.add(
      this.rhsService.textToDisplay$().subscribe((text: string) => {
        this.textToDisplay = text;
      })
    );
    this.subscriptions.add(
      this.rhsService.emboldenedText$().subscribe((text: string) => {
        this.emboldenedText = text;
      })
    );
    this.subscriptions.add(
      this.deliveryService.fontBoldSubject$().subscribe((bold: boolean) => {
        this.textBold = bold;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
