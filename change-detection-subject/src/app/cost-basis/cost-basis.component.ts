import {
  Component, OnInit, DoCheck, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterViewInit
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

  equity$ = this.appService.getEquity$();

  constructor(
    private appService: AppService) {
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck CostBasis Component');
  }

  buttonClick(): void {
    console.log('CostBasis Click');
  }
}
