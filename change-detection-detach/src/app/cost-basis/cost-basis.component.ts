import {
  Component, OnInit, DoCheck, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterViewInit, Input
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cost-basis',
  templateUrl: './cost-basis.component.html',
  styleUrls: ['./cost-basis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostBasisComponent implements OnInit, AfterViewInit, DoCheck {

  @Input()
  equity: Equity;

  constructor(private appService: AppService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
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
