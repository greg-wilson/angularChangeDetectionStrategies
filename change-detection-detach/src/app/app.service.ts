import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private componentChanges = 0;

  private omponentChangeSubject = new BehaviorSubject<number>(0);

  private componentChanges$ = this.omponentChangeSubject.asObservable();

  constructor() { }

  public getComponentChangesObservable(): Observable<number> {
    return this.componentChanges$;
  }

  public incrementcomponentChanges() {
    this.omponentChangeSubject.next(++this.componentChanges);
  }
}
