import {
  Component, ChangeDetectionStrategy,
  Input, DoCheck
} from '@angular/core';
import { Equity } from '../equity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements DoCheck {

  @Input()
  equity: Equity;

  constructor() { }

  public ngDoCheck(): void {
    console.log('ngDoCheck Details Component');
  }

  buttonClick(): void {
    console.log('Details Click');
  }

  getValue(): number {
    return this.equity.price * this.equity.shares;
  }
}
