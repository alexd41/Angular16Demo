import { Component, OnDestroy, OnInit } from '@angular/core';
import { RhsService } from './rhs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.less']
})
export class RhsComponent implements OnInit, OnDestroy {
  public textToDisplay!: string;
  public subscription: Subscription = new Subscription();

  constructor(private rhsService: RhsService) {
  }
  
  ngOnInit(): void {
    this.subscription.add(
      this.rhsService.textToDisplay$().subscribe((text: string) => {
        this.textToDisplay = text;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
