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

  private equitySubject = new BehaviorSubject<Equity>(new Equity('Microsoft', 'MSFT', 100.00, 1000, 10, 50.00));

  private equity$ = this.equitySubject.asObservable();

  private orderSubject = new BehaviorSubject<Order>(null);

  private order$ = this.orderSubject.asObservable();

  constructor() { }

  public getEquity$(): Observable<Equity> {
    return this.equity$;
  }

  public getOrder$(): Observable<Order> {
    return this.order$;
  }

  public getComponentChanges$(): Observable<number> {
    return this.componentChanges$;
  }

  public setEquity(equity: Equity) {
    this.equitySubject.next(equity);
  }

  public incrementcomponentChanges() {
    this.componentChangeSubject.next(++this.componentChanges);
  }

  public placeOrder(newOrder: Order) {
    this.orderSubject.next(newOrder);
  }
}
