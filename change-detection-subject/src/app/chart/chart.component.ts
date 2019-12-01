import {
  Component, DoCheck, ChangeDetectionStrategy,
  ElementRef, NgZone, AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';
import { Order } from '../order';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements AfterViewInit, DoCheck {

  inChart: boolean;

  onMouseMove(mouseEvent: MouseEvent) {
    // console.log(mouseEvent.offsetX + ' ' + mouseEvent.clientY);
    if (mouseEvent.clientY > 250 && mouseEvent.clientY < 300 && this.inChart !== true) {
        this.inChart = true;
        this.changeDetectorRef.detectChanges();
    }
    if (mouseEvent.clientY > 300 && this.inChart !== false) {
        this.inChart = false;
        this.changeDetectorRef.detectChanges();
    }
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private appService: AppService,
    private elementRef: ElementRef,
    private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener('mousemove', (mouseEvent: MouseEvent) => this.onMouseMove(mouseEvent));
    });

  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Chart Component');
  }

  buttonClick(): void {
    console.log('Chart Click');
  }
}
