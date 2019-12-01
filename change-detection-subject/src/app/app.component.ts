import { Component, ChangeDetectionStrategy, AfterViewInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { AppService } from './app.service';
import { Equity } from './equity';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, DoCheck {
  title = 'change-detection';

  componentChanges = 0;

  componentChanges$ = this.appService.getComponentChanges$();

  shares: number;

  equity = new Equity('Microsoft', 'MSFT', 100.00, 1000, 10, 50.00);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public appService: AppService) {

  }

  ngAfterViewInit() {
    this.componentChanges$.subscribe(val => console.log(val));

    this.appService.getEquity$().subscribe(e => this.equity = e);

    this.appService.getOrder$().subscribe(o => this.orderPlaced(o));
  }

  ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck APP Component ' + new Date().toLocaleTimeString());
  }

  buttonClick(): void {
    console.log('App Component Click');
  }

  orderPlaced(newOrder: Order) {
    if (newOrder) {
      if (!this.shares) {
        this.shares = 0;
      }
      this.shares += newOrder.shares;
      this.trade();
    }
  }

  trade() {
    const shares = this.equity.shares += this.shares;
    this.equity = new Equity('Microsoft', 'MSFT', 100.00, shares, 10, 50.00);
    this.appService.setEquity(this.equity);
  }
}
