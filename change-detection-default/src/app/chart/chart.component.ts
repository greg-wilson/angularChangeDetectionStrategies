import { Component, DoCheck, ChangeDetectionStrategy, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { Equity } from '../equity';
import { Order } from '../order';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChartComponent implements DoCheck {

  @Input()
  equity: Equity;

  @Output()
  order = new EventEmitter<Order>();

  inChart: boolean;

  @HostListener('mousemove', ['$event'])
  onMouseMove(mouseEvent: MouseEvent) {
    // console.log(mouseEvent.offsetX + ' ' + mouseEvent.clientY);
    if (mouseEvent.clientY > 250 && mouseEvent.clientY < 300 && this.inChart !== true) {
      this.inChart = true;
    }
    if (mouseEvent.clientY > 300 && this.inChart !== false) {
      this.inChart = false;
    }
  }

  constructor() { }

  getSymbol() {
    console.log('method getName() called');
    return this.equity.symbol;
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck Chart Component');
  }

  orderPlaced(newOrder: Order) {
    this.order.emit(newOrder);
  }

  buttonClick(): void {
    console.log('Chart Click');
  }




}
