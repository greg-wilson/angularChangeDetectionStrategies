import { Component, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cost-basis',
  templateUrl: './cost-basis.component.html',
  styleUrls: ['./cost-basis.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CostBasisComponent implements DoCheck {

  @Input()
  equity: Equity;

  constructor(private appService: AppService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck CostBasis Component');
  }

  getCostBasis(): number {
    console.log('!!! getCostBasis Callsed');
    let costBasis = 0;
    if (this.equity) {
      costBasis = this.equity.purchasePrice * this.equity.purchasedShares;
    }
    return costBasis;
  }

  buttonClick(): void {
    console.log('CostBasis Click');
  }

}
