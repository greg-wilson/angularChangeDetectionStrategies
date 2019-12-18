import {
  Component, DoCheck, ChangeDetectionStrategy,
  AfterViewInit, Input, Output
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cost-basis',
  templateUrl: './cost-basis.component.html',
  styleUrls: ['./cost-basis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostBasisComponent implements DoCheck {

  @Input()
  equity: Equity;

  constructor(private appService: AppService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck CostBasis Component');
  }

  buttonClick(): void {
    console.log('CostBasis Click');
    this.equity = new Equity('Microsoft', 'MSFT', 100.00, this.equity.shares + 1000, 10, 50.00);
  }

  // #CODE no need for template method to display cost basis information
  // #CODE Template method
  getCostBasis(): number {
    console.log('!!! getCostBasis Called');
    let costBasis = 0;
    if (this.equity) {
      costBasis = this.equity.purchasePrice * this.equity.purchasedShares;
    }
    return costBasis;
  }
}
