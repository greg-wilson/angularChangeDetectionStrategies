import { Component, DoCheck, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Equity } from '../equity';
import { Order } from '../order';
import { AppService } from '../app.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeComponent implements AfterViewInit, DoCheck {

  equity: Equity;

  private shares: number;

  constructor(private appService: AppService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.appService.getEquity$().subscribe(e => {
      this.equity = e;
      this.changeDetectorRef.detectChanges();
    });
    this.changeDetectorRef.detach();
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck EchoComponent Component');
  }

  buttonClick(): void {
    this.appService.placeOrder(new Order('MSFT', this.shares));
  }

  onKey(eventData: any) {
    this.changeDetectorRef.detectChanges();
  }

  getValue(): number {
    console.log('!!! getValue() Called');
    if (this.equity) {
      return this.equity.price * this.equity.shares;
    } else {
      return 0;
    }
  }
}
