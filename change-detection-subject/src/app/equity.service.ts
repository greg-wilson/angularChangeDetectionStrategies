import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Equity } from './equity';
import { Order } from './order';

/**
 * Service to share Equity data between components
 */
@Injectable({
  providedIn: 'root'
})
export class EquityService {

  /**
   * The equity behavior subject
   */
  private equitySubject = new BehaviorSubject<Equity>(new Equity('Microsoft', 'MSFT', 100.00, 1000, 10, 50.00));

  /**
   * The equity observable
   */
  private equity$ = this.equitySubject.asObservable();

  /**
   * The order behavior subject
   */
  private orderSubject = new BehaviorSubject<Order>(null);

  /**
   * The order observable
   */
  private order$ = this.orderSubject.asObservable();

  /**
   * CTR
   */
  constructor() { }

  /**
   * Get the equity observable
   */
  public getEquity$(): Observable<Equity> {
    return this.equity$;
  }

  /**
   * Get the order observable
   */
  public getOrder$(): Observable<Order> {
    return this.order$;
  }

  /**
   * Set the equity to share with all components
   * @param equity the updated equity
   */
  public setEquity(equity: Equity) {
    this.equitySubject.next(equity);
  }

  /**
   * Place an equity order
   * @param newOrder a new order
   */
  public placeOrder(newOrder: Order) {
    this.orderSubject.next(newOrder);
  }
}
