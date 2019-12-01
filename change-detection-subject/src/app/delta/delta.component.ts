import {
  Component, DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaComponent implements DoCheck {

  equity$ = this.appService.getEquity$();

  constructor(private appService: AppService) { }


  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck DELTA Component');
  }

  buttonClick(): void {
    console.log('Delta Click');
  }
}
