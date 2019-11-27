import { Component, OnInit, DoCheck, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Equity } from '../equity';
import { Order } from '../order';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TradeComponent implements OnInit, DoCheck {

  @Input()
  equity: Equity;

  @Output()
  order = new EventEmitter<Order>();

  private shares: number;

  constructor() { }

  ngOnInit() {
  }

  public ngDoCheck(): void {
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
