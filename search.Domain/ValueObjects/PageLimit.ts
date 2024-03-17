export class PageLimit {
  constructor(public value: number) {
    if (value < 0) {
      throw new Error(`Wrong ${PageLimit.name}`);
    }
  }
}