import { Pipe, PipeTransform } from '@angular/core';
import { Equity } from './equity';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const s = value as Equity;
    if (s) {
      return s.symbol;
    } else {
      return '';
    }
  }

}
