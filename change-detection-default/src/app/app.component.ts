import { Component, ChangeDetectionStrategy, AfterViewInit, DoCheck } from '@angular/core';
import { AppService } from './app.service';
import { Equity } from './equity';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements DoCheck {
  title = 'change-detection';

  public shares: number;

  equity = new Equity('Microsoft', 'MSFT', 100.00, 1000, 10, 50.00);

  constructor(public appService: AppService) {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck APP Component ' + new Date().toLocaleTimeString());
  }

  buttonClick(): void {
    console.log('App Component Click');
  }

  orderPlaced(newOrder: Order){
    this.equity.shares += newOrder.shares;
  }

  trade() {
    this.equity.shares += this.shares;
  }
}
