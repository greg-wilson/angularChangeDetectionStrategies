import { Component, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements DoCheck {

  @Input()
  equity: Equity;

  constructor(private appService: AppService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Summary Component');
  }

  buttonClick(): void {
    console.log('Summary Click');
  }
}
