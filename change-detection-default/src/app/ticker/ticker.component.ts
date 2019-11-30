import { Component, OnInit } from '@angular/core';
import { isArray } from 'util';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  wsUrl = 'wss://connect.websocket.in/griptide?room_id=2019';

  receiver: WebSocket;

  symbolData: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
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
