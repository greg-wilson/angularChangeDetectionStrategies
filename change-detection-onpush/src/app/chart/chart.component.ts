import {
  Component, DoCheck, ChangeDetectionStrategy,
  Input, ElementRef, NgZone, AfterViewInit, Output, EventEmitter, ChangeDetectorRef
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

  @Input()
  equity: Equity;

  @Output()
  order = new EventEmitter<Order>();

  inChart: boolean;

  constructor(
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef,
    private zone: NgZone) { }

  onMouseMove(mouseEvent: MouseEvent) {
    // console.log(mouseEvent.offsetX + ' ' + mouseEvent.clientY);
    if (mouseEvent.clientY > 250 && mouseEvent.clientY < 300 && this.inChart !== true) {
      this.inChart = true;
      // #CODE when the style is updated tell angular to run change detection
      // so that color is updated in the view
      this.changeDetectorRef.detectChanges();
    }
    if (mouseEvent.clientY > 300 && this.inChart !== false) {
      this.inChart = false;
      this.changeDetectorRef.detectChanges();
    }
  }

  ngAfterViewInit() {
    // #CODE add an event listern outside of angular
    this.zone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener('mousemove', (mouseEvent: MouseEvent) => this.onMouseMove(mouseEvent));
    });
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Chart Component');
  }

  orderPlaced(newOrder: Order) {
    this.order.emit(newOrder);
  }

  buttonClick(): void {
    console.log('Chart Click');
  }
}
