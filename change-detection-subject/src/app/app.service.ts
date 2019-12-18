import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Equity } from './equity';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private componentChanges = 0;

  private componentChangeSubject = new BehaviorSubject<number>(0);

  private componentChanges$ = this.componentChangeSubject.asObservable();

  constructor() { }

  public getComponentChanges$(): Observable<number> {
    return this.componentChanges$;
  }

  public incrementcomponentChanges() {
    this.componentChangeSubject.next(++this.componentChanges);
  }
}
