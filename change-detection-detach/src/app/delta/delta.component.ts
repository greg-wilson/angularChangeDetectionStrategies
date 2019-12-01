import {
  Component, DoCheck,
  ChangeDetectionStrategy,
  Input, ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaComponent implements AfterViewInit, DoCheck {

  equity: Equity;

  constructor(private appService: AppService, private changeDetectorRef: ChangeDetectorRef, ) { }

  ngAfterViewInit() {
    this.appService.getEquity$().subscribe( e => {
      this.equity = e;
      this.changeDetectorRef.detectChanges();
    });
    this.changeDetectorRef.detach();
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck DELTA Component');
  }

  buttonClick(): void {
    console.log('Delta Click');
  }
}
