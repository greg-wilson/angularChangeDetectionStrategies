import { Component, OnInit, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { Equity } from '../equity';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SummaryComponent implements OnInit, DoCheck {

  @Input()
  equity: Equity;

  constructor() { }

  ngOnInit() {
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck Summary Component');
  }

  buttonClick(): void {
    console.log('Alpha Click');
  }

}
