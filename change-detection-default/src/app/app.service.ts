import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  private logDoChangeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private logDoChange$ = this.logDoChangeSubject.asObservable();

  constructor() { }

  getLogDoChange(): Observable<boolean> {
    return this.logDoChange$;
  }

  setLogDoChange(value: boolean): void {
    this.logDoChangeSubject.next(value);
  }

  ngOnDestroy() {
    this.logDoChangeSubject.complete();
  }
}
