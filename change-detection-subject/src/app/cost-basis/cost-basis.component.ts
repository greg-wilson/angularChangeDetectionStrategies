import {
  Component, OnInit, DoCheck, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterViewInit
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';
import { EquityService } from '../equity.service';

@Component({
  selector: 'app-cost-basis',
  templateUrl: './cost-basis.component.html',
  styleUrls: ['./cost-basis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostBasisComponent implements DoCheck {

  equity$ = this.equityService.getEquity$();

  constructor(
    private appService: AppService,
    private equityService: EquityService) {
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck CostBasis Component');
  }

  buttonClick(): void {
    console.log('CostBasis Click');
  }
}
