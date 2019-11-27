import { Component, OnInit, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { Equity } from '../equity';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchoComponent implements OnInit, DoCheck {

  @Input()
  equity: Equity;

  constructor() { }

  ngOnInit() {
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck EchoComponent Component');
  }

  buttonClick(): void {
    console.log('Echo Click');
  }

  getValue(): number {
    return this.equity.price * this.equity.shares;
  }
}
