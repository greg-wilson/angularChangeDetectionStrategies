import { Pipe, PipeTransform } from '@angular/core';
import { Equity } from './equity';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('!!! Value Pipe Called');
    const s = value as Equity;
    if (s) {
      return s.price * s.shares;
    } else {
      return 0;
    }
  }

}
