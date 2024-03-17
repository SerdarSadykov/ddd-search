export class PageNumber {
  constructor(public value: number) {
    if (value < 0) {
      throw new Error(`Wrong ${PageNumber.name}`);
    }
  }
}