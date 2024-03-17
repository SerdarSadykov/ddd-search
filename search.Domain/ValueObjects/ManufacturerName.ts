export class ManufacturerName {
  private static readonly MAX_LENGTH = 255;

  constructor(public value: string) {
    if (value.length > ManufacturerName.MAX_LENGTH) {
      throw new Error(`Wrong ${ManufacturerName.name}`);
    }
  }
}