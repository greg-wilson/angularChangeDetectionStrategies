import {
  Component, OnInit, DoCheck, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterViewInit, Input
} from '@angular/core';
import { Equity } from '../equity';

@Component({
  selector: 'app-cost-basis',
  templateUrl: './cost-basis.component.html',
  styleUrls: ['./cost-basis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostBasisComponent implements OnInit, AfterViewInit, DoCheck {

  @Input()
  equity: Equity;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck CostBasis Component');
  }

  getCostBasis(): number {
    console.log('!!!! CostBasis Method Called');
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
