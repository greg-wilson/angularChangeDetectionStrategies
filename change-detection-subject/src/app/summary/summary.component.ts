import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';
import { EquityService } from '../equity.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements DoCheck {

  equity$ = this.equityService.getEquity$();

  constructor(private appService: AppService,
              private equityService: EquityService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Summary Component');
  }

  buttonClick(): void {
    console.log('Summary Click');
  }

}
