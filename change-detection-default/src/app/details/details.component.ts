import {
  Component, ChangeDetectionStrategy,
  Input, DoCheck
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetailsComponent implements DoCheck {

  @Input()
  equity: Equity;

  constructor(private appService: AppService) { }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck Details Component');
  }

  buttonClick(): void {
    console.log('Details Click');
  }

  getValue(): number {
    console.log('!!! getValue() Called');
    return this.equity.price * this.equity.shares;
  }
}
