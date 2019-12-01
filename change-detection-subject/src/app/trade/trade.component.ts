import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Order } from '../order';
import { AppService } from '../app.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeComponent implements DoCheck {

  equity$ = this.appService.getEquity$();

  private shares: number;

  constructor(private appService: AppService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Trade Component');
  }

  buttonClick(): void {
    this.appService.placeOrder(new Order('MSFT', this.shares));
  }
}
