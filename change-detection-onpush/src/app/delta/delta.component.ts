import { Component, OnInit, DoCheck, ChangeDetectionStrategy, Input } from '@angular/core';
import { Equity } from '../equity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaComponent implements OnInit, DoCheck {

  @Input()
  equity: Equity;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  public ngDoCheck(): void {
    this.appService.incrementcomponentChanges();
    console.log('ngDoCheck DeltaComponent Component');
  }

  buttonClick(): void {
    console.log('Delta Click');
  }

  getValue(): number {
    return this.equity.price * this.equity.shares;
  }
}
