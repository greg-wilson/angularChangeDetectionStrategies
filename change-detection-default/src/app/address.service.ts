import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addresses = new Array<Address>();

  addressSubject = new BehaviorSubject<Address[]>(this.addresses);

  public addressObservable$ = this.addressSubject.asObservable();

  constructor() {
    this.addresses.push(new Address('Riptide', '200 East Palm Valley Drive'));
    this.addresses.push(new Address('Apple', '1 Apple Park Way'));
    this.addresses.push(new Address('Google', '1600 Amphitheatre Parkway'));
    this.addresses.push(new Address('Microsoft', '1 Microsoft Way'));
    this.addresses.push(new Address('Amazon', '410 Terry Ave'));
  }

  filter(filter: string) {
    if (!filter || filter.length === 0) {
      this.addresses.forEach(a => a.visible = true);
    } else {
      this.addresses.forEach(a => a.visible = a.name.indexOf(filter) >= 0);
    }
  }
}
