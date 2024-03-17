export class TradeMarkName {
  private static readonly MAX_LENGTH = 255;

  constructor(public value: string) {
    if (value.length > TradeMarkName.MAX_LENGTH) {
      throw new Error(`Wrong ${TradeMarkName.name}`);
    }
  }
}