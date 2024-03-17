export class CategoryName {
  private static readonly MAX_LENGTH = 255;

  constructor(public value: string) {
    if (value.length > CategoryName.MAX_LENGTH) {
      throw new Error(`Wrong ${CategoryName.name}`);
    }
  }
}