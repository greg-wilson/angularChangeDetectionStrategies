import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Order } from '../order';
import { AppService } from '../app.service';
import { EquityService } from '../equity.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradeComponent implements DoCheck {

  equity$ = this.equityService.getEquity$();

  private shares: number;

  constructor(private appService: AppService, private equityService: EquityService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Trade Component');
  }

  buttonClick(): void {
    // #CODE use a service to coordinate changes to data between components
    this.equityService.placeOrder(new Order('MSFT', this.shares));
  }
}
