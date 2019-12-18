export class Equity {
    constructor(public name: string,
                public symbol: string,
                public price: number,
                public shares: number,
                public purchasedShares: number,
                public purchasePrice: number) {

    }
}