import { Pipe, PipeTransform } from '@angular/core';
import { Equity } from './equity';

@Pipe({
  name: 'costBasis'
})
export class CostBasisPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('!!! Cost Basis Pipe Called');
    const equity = value as Equity;
    let costBasis = 0;
    if (equity) {
      costBasis = equity.purchasePrice * equity.purchasedShares;
    }
    return costBasis;
  }

}
