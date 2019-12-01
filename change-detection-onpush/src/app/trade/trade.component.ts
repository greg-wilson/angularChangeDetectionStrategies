import { Component, DoCheck, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Equity } from '../equity';
import { Order } from '../order';
import { AppService } from '../app.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeComponent implements DoCheck {

  @Input()
  equity: Equity;

  @Output()
  order = new EventEmitter<Order>();

  private shares: number;

  constructor(private appService: AppService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck EchoComponent Component');
  }

  buttonClick(): void {
    this.order.emit(new Order('MSFT', this.shares));
  }

  getValue(): number {
    console.log('!!! getValue() Called');
    return this.equity.price * this.equity.shares;
  }
}
