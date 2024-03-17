export class ProductName {
  private static readonly MAX_LENGTH = 255;

  constructor(public value: string) {
    if (value.length > ProductName.MAX_LENGTH) {
      throw new Error(`Wrong ${ProductName.name}`);
    }
  }
}