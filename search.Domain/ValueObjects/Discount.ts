export class Discount {
  constructor(public value: number) {
    if (value < 1 || value > 100) {
      throw new Error(`Wrong ${Discount.name}`);
    }
  }
} 