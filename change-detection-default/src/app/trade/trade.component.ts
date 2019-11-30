import { Component, OnInit, DoCheck, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Equity } from '../equity';
import { Order } from '../order';
import { AppService } from '../app.service';

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

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

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
