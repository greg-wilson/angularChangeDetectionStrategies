import {
  Component, DoCheck, ChangeDetectionStrategy,
  Input, ElementRef, NgZone, AfterViewInit, Output, EventEmitter
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

  onMouseMove(mouseEvent: MouseEvent) {
    // console.log(mouseEvent.offsetX + ' ' + mouseEvent.clientY);
    if (mouseEvent.clientY > 250 && mouseEvent.clientY < 300 && this.inChart !== true) {
      this.zone.run(() => {
        this.inChart = true;
      });
    }
    if (mouseEvent.clientY > 300 && this.inChart !== false) {
      this.zone.run(() => {
        this.inChart = false;
      });
    }
  }

  constructor(private appService: AppService, private elementRef: ElementRef, private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener('mousemove', (mouseEvent: MouseEvent) => this.onMouseMove(mouseEvent));
    });
  }

  getSymbol() {
    console.log('method getName() called');
    return this.equity.symbol;
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
