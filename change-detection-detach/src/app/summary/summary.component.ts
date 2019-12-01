import { Component, OnInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements AfterViewInit, DoCheck {

  equity: Equity;

  constructor(private appService: AppService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.appService.getEquity$().subscribe( e => {
      this.equity = e;
      this.changeDetectorRef.detectChanges();
    });
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Summary Component');
  }

  buttonClick(): void {
    console.log('Summary Click');
  }

}
