import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sender';

  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczZWRjOTkwMjg2YmU4NGE0ZmFmMGY0NmZlMTM3MDZiNTVmZjg4ODZhNGY5ZTI3N2YyNjk3MTE5MTU5ZWQ5ZWIxNzg5NmViOTZjMTBhYjFjIn0.eyJhdWQiOiI2IiwianRpIjoiNzNlZGM5OTAyODZiZTg0YTRmYWYwZjQ2ZmUxMzcwNmI1NWZmODg4NmE0ZjllMjc3ZjI2OTcxMTkxNTllZDllYjE3ODk2ZWI5NmMxMGFiMWMiLCJpYXQiOjE1NzM5MTYwOTksIm5iZiI6MTU3MzkxNjA5OSwiZXhwIjoxNjA1NTM4NDk5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.Ag3L4P5PY-Hzh7KG43765hKqzyWX4A63_x4InUjlaloN6Zg3TKBFAynA7O1XQDjuibl2uLd_oMYLpIS0gDI6XLD4uSNg9BQG303dxc2vkr7wyeMXZc9zeGUhfgg1ipHh5Dqw52UrC9BaTMV8QPjzNT_U_tTzfxePZ-9VmKho2sNCw138-stszbBqW0PnbAkEb_SCiELvZruvWSJxtZ44KgV9FBwFHb_czZM-OtM31b9Mx-JjB43_Z46tfGxkXswySvFLqnU35ONyl2dHmWSHHI1O61YTn2jOU8zQ4T1V8Dp0TpMJi9P_uRHZlaWNarJX8wwF2qHam0IbZm0jnT21m6HF3CBXNtmslkRZMcsfE_sdOiagxpTUEApw3PgSBOtsuqfvLpMEFM-4OMtRFHW6-jx4oMg0zazMk_7265iOYMcmHmGGqNDJqKz4DpXp7r7j-OfizrGnVA3SPi02wdrXT0nmbPCsWXO9mMZQEf-Nk1dXK8lZkiETn6DHl1RJfAbT33YyjkwBzG9p6QekGKPQ5Rnf3MAs7UXRCcK4RgRsCJTnQZxMz3FcIt6a0zA8YjfHJKyr3xVsebIUJL7c77iMiZLcs7n3g4YqDS_0gXUNsA_RqiAQrzMbZ1YddHzMdMjpHqfZL98mjquaP7iNI4YB4IVWiMicxliCPTlCgb30NP4';

  // wsUrl = 'wss://connect.websocket.in/v2/2019?token=' + this.token;

  wsUrl = 'wss://connect.websocket.in/griptide?room_id=2019';

  symbols = [
    {
      symbol: 'MSFT',
      price: 100.34
    }, {
      symbol: 'CSCO',
      price: 45.79
    }, {
      symbol: 'T',
      price: 100.34
    }, {
      symbol: 'PFE',
      price: 69.44
    }, {
      symbol: 'AMZN',
      price: 1759.57
    }, {
      symbol: 'FB',
      price: 12.88
    }
  ];


  sender: WebSocket;


  ngOnInit() {

  }

  stop() {
    this.sender.close();
  }

  start() {
    if (this.sender) {
      this.sender.close();
    }

    this.sender = new WebSocket(this.wsUrl);
    this.sender.onopen = (ev: Event) => {
      console.log('connection opened');
      interval(1000).subscribe(() => {
        this.send();
      });
    };

    this.sender.onerror = (ev: Event) => {
      console.log('connection error');
    };

    this.sender.onclose = () => {
      console.log('closed');
    };
  }

  send() {
    this.symbols.forEach((s) => {
      s.price += s.price * 0.02;
    });
    const data = JSON.stringify(this.symbols);
    this.sender.send(data);
    console.log('sending: ' + data);
  }
}
