import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { AppService } from './app.service';
import { Equity } from './equity';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  title = 'change-detection';

  componentChanges$ = this.appService.getComponentChanges$();

  shares: number;

  equity = new Equity('Microsoft', 'MSFT', 100.00, 1000, 10, 50.00);

  constructor(public appService: AppService) {
    this.componentChanges$.subscribe(val => console.log(val));
  }

  ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck APP Component ' + new Date().toLocaleTimeString());
  }

  buttonClick(): void {
    console.log('App Component Click');
  }

  orderPlaced(newOrder: Order) {
    if (!this.shares) {
      this.shares = 0;
    }
    this.shares += newOrder.shares;
    this.trade();
  }

  trade() {
    // with OnPush change detection, changes are detected when the reference changes
    const shares = this.equity.shares += this.shares;
    this.equity = new Equity('Microsoft', 'MSFT', 100.00, shares, 10, 50.00);
  }
}
