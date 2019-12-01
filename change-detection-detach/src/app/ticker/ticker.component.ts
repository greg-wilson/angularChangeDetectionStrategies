import { Component, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { isArray } from 'util';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerComponent implements AfterViewInit {

  wsUrl = 'wss://connect.websocket.in/griptide?room_id=2019';

  receiver: WebSocket;

  symbolData: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }

  start() {

    // throttle change detection with interval and ChangeDetectorRef
    setInterval(() => { this.changeDetectorRef.detectChanges(); }, 5000);

    this.receiver = new WebSocket(this.wsUrl);
    this.receiver.onmessage = (ev: MessageEvent) => {
      const data = JSON.parse(ev.data);
      if (data && Array.isArray(data)) {
        this.symbolData = data;
      }
    };

    this.receiver.onopen = (ev: Event) => {
      console.log('connection opened');
    };

    this.receiver.onerror = (ev: Event) => {
      console.log('connection error');
    };
  }

}
